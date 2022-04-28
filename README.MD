# Encurtador de links 
## Equipe
- Lucas Marinho - Frontend
- Jefferson Lopes - Fullstack
- Gabriel Duarte - Fullstack
- Evaldo Martins - Backend ( Trancou a disciplina )

## Escopo
O sistema busca ser uma utilidade para o compartilhamento de links, com a possibilidade de veiculação de anúncios. Em suma, o sistema deve encurtar links para um tamanho específico que, quando forem acessados, mostrarão uma publicidade por X segundos e redicionarão para o endereço desejado. 

### Features básicas
- Permitir que o usuario encurte links
- Permitir a exibição de anúncios no redirecionamento de links
### Features adicionais (a depender do tempo de implementação)
- Conta (com login e senha) para os usuários gerenciarem seus links encurtados
- Inserir senhas em links
- Links com data de expiração
- Dashboard que mostra a quantidade de acessos a cada link
- Dashboard que mostra a quantidade de dinhiero ganho com anúncios
- Habilitar e desabilitar anúncios em links
- Limpar do banco de dados links expirados e/ou que estão há muito tempo sem utilização

## Tecnologias
Para o frontend, pretende-se implementar em HTML, CSS e Javascript, com o auxílio da framework Bootstrap.
Para o backend, a framework NodeJS será utilizada.
A camada de dados será tratada com MySQL.

## Plano de MVP
Muitos encurtadores de link já existem, o desafio é testar se ainda existe espaço para mais um
### Vídeo Explicativo + Single Page Application
- Criar uma single page application com funcionalidades básicas
- Direcionar as pessoas para a single page application através do vídeo
- Criar uma série de vídeos explicando como o sistema funciona com o intuito de capturar usuários que estejam pesquisando sobre o assunto

## Histórias de Usuário - Backlog da Sprint 1

### Como usuário, eu gostaria de encurtar um link:
- Fazer endpoint de encurtamento de link -> (Gabriel)
- Criar tela de encurtamento de link (Lucas)
- Criar tabela no banco para relacionar links completos com encurtados -> (Gabriel)
### Como usuário, eu gostaria de exibir anúncios nos meus links encurtados:
- Criar tela intermediária que exibe anúncios e depois redireciona (Lucas)
- Criar endpoint que retorne anúncio -> (Gabriel)
- Criar tabela que guarde os anúncios (imagens) -> (Gabriel)

### Como usuário, eu gostaria de ter uma conta no sistema para gerenciar meus links encurtados:
- Criar endpoint de login e registro -> (Gabriel)
- Criar tabela de login e registro -> (Gabriel)
- Criar esquema no banco de dados para autenticação -> (Gabriel)
### Como usuário, eu gostaria de inserir senhas nos meus links:
- Adicionar tela de senha intermediária (Lucas)
- Criar endpoint de autenticação (Jefferson)
- Modificar tabela de links e incluir senha (Jefferson)

### Como usuário, eu gostaria de inserir uma data de expiração nos meus links:
- Adicionar data de expiração na interface (Lucas)
- Modificar a tabela de links e incluir data de expiração (Jefferson)
- Modificar o endpoint de redirecionamento para contabilizar a data de expiração da URL (Jefferson)
### Como usuário, eu gostaria de visualizar a quantidade de acessos aos meus links:
- Adicionar uma tela no front que exibe as estatísticas de cada link (Lucas)
- Modificar o endpoint para contabilizar a quantidade de vezes que o link foi acessado (Jefferson)
- Modificar a tabela de links e incluir a quantidade de acessos (Jefferson)

## Link da apresentação da Sprint 1
https://docs.google.com/presentation/d/1V2ia4AIlxXt_MFI_Q-XNMblruwRI5C5fUasAyyGHF7c/edit#slide=id.g125f3f7a426_0_84

## Link do mockup no Figma
https://www.figma.com/file/xMjIY4QUV7wkIgsYbgkQrz/Encurtador-de-Links?node-id=0%3A1