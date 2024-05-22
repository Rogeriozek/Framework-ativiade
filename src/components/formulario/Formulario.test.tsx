import { render } from "@testing-library/react";
import { Formulario } from "./Formulario";
import userEvent from "@testing-library/user-event";
import React from "react";

describe('no formulario', () => {
  const mockAoSubmeter = jest.fn();

  test('Se os campos estiverem vazios, o botão deve estar desabilitado', async () => {
    // Renderiza o componente Formulario
    const { getByPlaceholderText, getByRole } = render(<Formulario aoSubmeter={mockAoSubmeter} />);

    // Buscar inputs via placeholder
    const inputNome = getByPlaceholderText('Insira o nome do filme');
    const inputAnoDeLancamento = getByPlaceholderText('Digite o ano de lançamento');

    // Captura do botão enviar
    const botaoAdicionar = getByRole('button');

    // Verificações
    expect(inputNome).toBeInTheDocument();
    expect(inputAnoDeLancamento).toBeInTheDocument();
    
    // O botão deve estar desabilitado se os campos estiverem vazios
    expect(botaoAdicionar).toBeDisabled();

    // Opcionalmente, você pode verificar se o botão fica habilitado após preencher os campos
    await userEvent.type(inputNome, 'Um Filme');
    await userEvent.type(inputAnoDeLancamento, '2021');
    expect(botaoAdicionar).toBeEnabled();
  });
});
