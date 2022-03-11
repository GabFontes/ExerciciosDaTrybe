import { render, screen } from '@testing-library/react';
const service = require('./service');

test("1. Testa a função randomNumber", () => {
  service.randomNumber = jest.fn().mockReturnValue(10);
  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
})

test("2. Testa a função randomNumber com mock de divisão", () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  expect(service.randomNumber(4, 2)).toBe(2);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(4, 2);
})

test("3. Testa a função randomNumber com mock de multiplicação", () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
  expect(service.randomNumber(2, 2, 2)).toBe(8);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(2, 2, 2);
})

test("4. Testa a função randomNumber com mock que retorna o dobro do parâmetro", () => {
  service.randomNumber.mockReset();

  service.randomNumber = jest.fn().mockImplementationOnce((param) => param * 2);
  
  expect(service.randomNumber(10)).toBe(20);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(10);
})