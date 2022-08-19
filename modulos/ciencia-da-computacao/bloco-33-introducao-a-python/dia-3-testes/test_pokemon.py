import json
import pytest
from pokemon import retrieve_pokemons_by_type
from io import StringIO

# Criamos o contexto de um pokemon do tipo grama


@pytest.fixture
def grass_type_pokemon():
    return {
        "national_number": "001",
        "evolution": None,
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "total": 318,
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "sp_atk": 65,
        "sp_def": 65,
        "speed": 45,
    }


# Criamos o contexto de um pokemon do tipo água
@pytest.fixture
def water_type_pokemon():
    return {
        "national_number": "007",
        "evolution": None,
        "name": "Squirtle",
        "type": ["Water"],
        "total": 314,
        "hp": 44,
        "attack": 48,
        "defense": 65,
        "sp_atk": 50,
        "sp_def": 64,
        "speed": 43,
    }


def test_retrieve_pokemons_by_type(grass_type_pokemon, water_type_pokemon):
    # criamos um arquivo em memória que o seu conteúdo são os dois pokemons
    fake_file = StringIO(
        json.dumps({"results": [grass_type_pokemon, water_type_pokemon]})
    )
    # quando pesquisamos por pokemons do tipo grama,
    # o pokemon do tipo água não deve ser retornado
    assert grass_type_pokemon in retrieve_pokemons_by_type("Grass", fake_file)


# Boa noite, eu sou o Gabriel, tenho 19 anos, e falo aqui de Dois Riachos no estado de Alagoas.

# Desde criança sempre tive uma paixão enorme por jogos, inicialmente jogos de console, já que eu sou da geração do playstation 2, então os jogos foram extremamente presentes na minha infância, e aí depois dos consoles acabei descobrindo os jogos de computador, jogos online e isso me aproximou muito do mundo da tecnologia, e desde então, decidi que iria querer trabalhar nessa área, seja com jogos ou algum outro setor da tecnologia, então no ensino médio eu fiz um curso técnico de informática, onde tive meu primeiro contato com a programação com a linguagem C++, e essa minha primeira experiência com programação foi muito positiva, gostei muito, deu match na hora, foi ali no ensino médio onde eu tive mais certeza ainda que iria seguir com a tecnologia pra minha carreira profissional.

# Terminei o ensino médio e esse curso técnico com 17 em 2020 anos, porém aqui na onde eu moro que é uma cidade do interior, não tinha a faculdade que eu queria fazer que era de análise e desenvolvimento de sistemas, então fiquei um tempo meio perdido sem saber qual rumo tomar, porém não queria ficar stagnado, então comecei a trabalhar numa loja de móveis aqui da minha cidade, porém sempre procurando alguma outra faculdade ou curso que eu pudesse seguir, e aí eu acabei encontrando a trybe, achei a proposta bem interessante, e foi algo que fez sentido para mim, era a porta de entrada que eu estava em busca, isso foi + /- na metade de 2021, eu tinha acabado de completar 18 anos, ainda tava trabalhando nessa loja aqui na minha cidade, então fiz o processo seletivo, passei  e aí com 9 meses de trabalho, eu decidi sair do meu emprego pra fazer o curso da trybe, esses 9 meses que passei trabalhando fez total diferença na minha vida, foi uma experienca muito positiva em que eu aprendi muitas coisas, aprendi valores pessoais extremamente importantes, foi uma experiência muito necessária na minha vida.

# Então eu lembro que meu último dia de trabalho foi num sábado, e na segunda feira já foi o meu primeiro dia de curso na Trybe, e aí hoje quase 1 ano depois estudar programação na trybe tem sido uma experiencia incrível, eu aprendi muita coisa e conheci muitas pessoas importantes e atualmente estou em busca de uma oportunidade na área de desenvolvimento back-end, pretendo atingir minha independencia financeira, e futuramente me tornar um desenvolvedor back-end senior, muito obrigado pela antenção, esse processo tem sido uma experiencia muito prazerosa















