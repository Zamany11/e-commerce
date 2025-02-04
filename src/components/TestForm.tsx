// app/components/TestForm.tsx
"use client";

import { useActionState, useState } from 'react';
import { submitForm } from '../app/actions/form-actions';

export default function TestForm() {
  const [state, formAction] = useActionState(submitForm, { message: '', success: false });
  const [action, setAction] = useState<'create' | 'update' | 'delete'>('create');

  return (
    <div className="container flex justify-center items-center h-screen">
      <form className="form" action={formAction}>
        <label htmlFor="action" className="sr-only">Action</label>
        <select 
          id="action"
          name="action" 
          value={action}
          onChange={(e) => setAction(e.target.value as typeof action)}
          className="mb-4 p-2 border rounded"
        >
          <option value="create">Create User</option>
          <option value="update">Update User</option>
          <option value="delete">Delete User</option>
        </select>

        <input
          type="email"
          placeholder="User email"
          name="email"
          required
          className="mb-2 p-2 border rounded"
        />

        {action !== 'delete' && (
          <>
            <input
              type="text"
              placeholder="New name"
              name="name"
              className="mb-2 p-2 border rounded"
              required={action === 'create'}
            />
            <input
              type="password"
              placeholder="New password"
              name="password"
              className="mb-2 p-2 border rounded"
              required={action === 'create'}
              minLength={8}
            />
          </>
        )}

        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          {action.charAt(0).toUpperCase() + action.slice(1)} User
        </button>
        
        {state.message && (
          <p className={`mt-2 text-sm ${
            state.success ? 'text-green-600' : 'text-red-600'
          }`}>
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}
