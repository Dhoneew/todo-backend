import { Request, Response } from 'express';
import { TodoModel } from '../models/todoModel';

export const getTodos = async (req: Request, res: Response): Promise => {
  const userId = res.locals.userId; // Ambil dari res.locals
  try {
    const todos = await TodoModel.getByUserId(userId);
    res.status(200).json({ success: true, data: todos });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Gagal mengambil data.' });
  }
};

export const createTodo = async (req: Request, res: Response): Promise => {
  const { task } = req.body;
  const userId = res.locals.userId; // Ambil dari res.locals
  try {
    const newId = await TodoModel.create(userId, task);
    res.status(201).json({
      success: true,
      message: 'Tugas berhasil ditambahkan!',
      data: { id: newId, task, is_completed: false }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Gagal menambahkan tugas.' });
  }
};