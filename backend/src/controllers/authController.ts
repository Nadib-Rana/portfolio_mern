import User from '../models/User';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { sendVerificationEmail } from '../utils/sendVerificationEmail';

const generateToken = (id: string) =>
  jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: '1d' });

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body as { name: string; email: string; password: string };
    // modify : 08-17-2025
    //  if (!name || !email || !password) {
    //   return res.status(400).json({ message: 'All fields are required' });
    // }
    if (!name) {
      return res.status(400).json({ message: 'Name required' });
    }

     if (!email) {
      return res.status(400).json({ message: 'Email required' });
    }
     if (!password) {
      return res.status(400).json({ message: 'Password required' });
    }
    
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already in use' });

    const verificationToken = crypto.randomBytes(32).toString('hex');
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword, verificationToken });

    const verifyURL = `${process.env.CLIENT_URL}/verify/${verificationToken}`;
    await sendVerificationEmail(email, verifyURL);

    res.status(201).json({ message: 'Signup successful. Please verify your email.' });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const verifyEmail = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const user = await User.findOne({ verificationToken: token });
    if (!user) return res.status(400).send('Invalid or expired token');

    user.isVerified = true;
    user.verificationToken = undefined;
    const userinfo = await user.save();
    
    console.log(userinfo);
  
    res.send('Email verified successfully!');
  } catch (error) {
    console.error('Verify Error:', error);
    res.status(500).send('Internal Server Error');
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as { email: string; password: string };
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    if (!user.isVerified) return res.status(403).json({ message: 'Please verify your email first.' });

    const token = generateToken(user._id.toString());
    res.status(200).json({ user, token });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};