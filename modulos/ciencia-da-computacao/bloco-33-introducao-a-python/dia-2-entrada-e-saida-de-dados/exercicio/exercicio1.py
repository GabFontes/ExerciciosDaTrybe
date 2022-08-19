# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida.

def vertical_name (name):
  for _ in range(len(name)):
      print(name)
      name = name[:-1]


vertical_name(input("Digite seu nome: "))