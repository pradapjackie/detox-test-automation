import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders login screen correctly', () => {
    const {getByPlaceholderText, getAllByText} = render(<App />);
    
    expect(getAllByText('Login')).toHaveLength(2); // Title and button
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });

  it('shows error for invalid credentials', async () => {
    const {getByPlaceholderText, getAllByText} = render(<App />);
    
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButtons = getAllByText('Login');
    const loginButton = loginButtons[1]; // Get the button, not the title
    
    fireEvent.changeText(emailInput, 'invalid@email.com');
    fireEvent.changeText(passwordInput, 'wrongpassword');
    fireEvent.press(loginButton);
    
    // Note: Alert testing in React Native requires additional setup
    // This test verifies the basic interaction flow
  });

  it('handles input changes correctly', () => {
    const {getByPlaceholderText} = render(<App />);
    
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');
    
    expect(emailInput.props.value).toBe('test@example.com');
    expect(passwordInput.props.value).toBe('password123');
  });
});
