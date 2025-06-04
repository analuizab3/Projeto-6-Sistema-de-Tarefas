import { render, screen, fireEvent } from '@testing-library/react'
import ListaTarefas from '../components/ListaTarefas'
import React from 'react'

describe('ListaTarefas', () => {
  test('renderiza input e botão corretamente', () => {
    render(<ListaTarefas />)
    const input = screen.getByPlaceholderText('Nova tarefa')
    const button = screen.getByText('Adicionar')
    
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  test('adiciona tarefa à lista', () => {
    render(<ListaTarefas />)
    const input = screen.getByPlaceholderText('Nova tarefa')
    const button = screen.getByText('Adicionar')

    fireEvent.change(input, { target: { value: 'Estudar React' } })
    fireEvent.click(button)

    const item = screen.getByText('Estudar React')
    expect(item).toBeInTheDocument()
  })
})