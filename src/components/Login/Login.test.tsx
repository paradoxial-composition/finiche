import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import Login from './Login';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Login component', () => {
    render(<Login />);

    const header = screen.getByRole('heading', { name: 'Finiche' });
    const subHeader = screen.getByText('Un coin pour vos Film niche ;)');
    const loginInput = screen.getByPlaceholderText('Identifiant Canal+');
    const passwordInput = screen.getByPlaceholderText('Mot de passe');
    const connectButton = screen.getByText('Se connecter');

  it('renders the correct content', () => {

    expect(header).toBeInTheDocument();
    expect(subHeader).toBeInTheDocument();
    expect(loginInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(connectButton).toBeInTheDocument();
  });

  it('has the correct class names and styles', () => {
  
    expect(header).toHaveClass('text-center');
    expect(header).toHaveClass('text-4xl');
    expect(header).toHaveClass('uppercase');
    expect(subHeader).toHaveClass('text-center');
    expect(loginInput).toHaveClass('bg-black');
    expect(passwordInput).toHaveClass('bg-black');
    expect(connectButton).toHaveClass('bg-pink');
  });

  it('handles user input correctly', () => {
    render(<Login />);

    fireEvent.change(loginInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    expect((loginInput as HTMLInputElement).value).toBe('testuser');
    expect((passwordInput as HTMLInputElement).value).toBe('testpassword');
  });

  it('handles button click', () => {
    render(<Login />);
    console.log = jest.fn();
    const connectButton = screen.getByText('Se connecter');

    fireEvent.click(connectButton);
    expect(console.log).toHaveBeenCalledWith('Logging in ..', { login: '', password: '' });
  });
});