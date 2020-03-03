![protoboard](./protoboard.jpg)

# O errado que acabou melhor
Nós esquecemos de pegar as chaves do laboratório para o minicurso de testes unitários, de última hora conseguimos usar a sala da empesa junior. Era bem menor e todos ficamos em volta de uma mesa no centro. No laboratório cada um teria um computador e estariam dispostos em fila, além de usar o datashow. Na salinha nós tínhamos alguns monitores disponíveis e alguns trouxeram notebook.

Isto alterou bastante a dinâmica e acho que ficou melhor, era muito fácil interrompe, fazer perguntas e considerações, estávamos um no ombro do outro. Logo as pessoas se organizaram como programação em pares e dava pra passar o cabo do monitor pra clonar o que cada um estava editando e assim todos acompanhavam. 

# O hábito faz o monge
Meu primeiro interesse no minicurso era apresentar concentos mais avançados de javascript, queria chegar em composição e injeção de dependências, principalmente fazer isso de forma natural conforme se tenta simplificar o código quando a estrutura já está no limite da compreensão.

Para me aquecer comecei a fazer testes no estilo TDD no meu trabalho. Devia ter feito isso antes! Vale a pena fazer testes mesmo se acontecer uma catástrofe no disco e você perder todos os testes. O exercício de fazer testes guia o seu estilo a um código melhor.

O objetivo final não é ter os testes e garantir a conformidade do código a uma especificação, a maior vantagem é que seu código é testável. Significa que seu raciocínio está isolado, que aquele módulo é independente e possui um propósito único. Ou seja, tem baixo acoplamento e alta coesão. Ele é uma unidade.

Você acaba desenvolvendo o algoritmo dentro dos testes num ambiente seguro, limpo e bem iluminado. Depois que esta joia está pronta e lapidada você incorpora ela no código. 

# Espada de thundera
O código base para o minicurso já estava pronto há alguns meses, eu tinha deixado várias armadilhas para que o tropeço dos alunos fossem a deixa para uma explicação ou a introdução de algum novo conceito. Claro que eu esqueci e cai em várias delas. Mas os testes servem pra isso, um corrimão pra te segurar caso você perca o equilíbrio e indicar o caminho.

É como se você tivesse sensores em todo o código que ao menor sinal de anomalias disparam o alarme antes que o problema desencadeie em cascata um funcionamento incorreto. Ou pior, quando estes defeitos não desencadeiam um funcionamento incorreto aparente imediato.

Este radar consegue seguir o rastro de pólvora e destacar no mapa aonde as falhas estão. Idealmente o teste deveria identificar a origem, mas outro uso que traz um grande alívio é garantir quais partes do código estão corretos, então mesmo que não se saiba como desenrolar o defeito eliminamos da preocupação uma boa parte do domínio.

# A+
Causa controvérsias a discussão sobre se podemos fazer mocks e onde o uso disto seria positivo, quando o sistema deve causas efeitos colaterais, como salvar algo no banco ou fazer requisições a serviços externos, não há como injetar exatamente este efeito e algum tipo de stub acaba sendo usado. Talvez valha mais indicar princípios a seguir e dar exemplos de como seria possível melhorar continuamente os testes e o código.

## Repetir é bom
O propósito dos testes é diferente do código, por isso as boas práticas para ambos divergem. A preocupação nos testes é a legibilidade mesmo em detrimento do desempenho ou da não repetição, primeiro porque frameworks de testes geralmente implementam artifícios para que a rotina de teste execute com velocidade suficiente.

Segundo, os testes são lidos isolados pelo desenvolvedor, em cada um dele deve conter em si mesmo tudo o que for necessário para sua inicialização e configuração, estados não devem ser compartilhados. Por exemplo, num teste você coloca num objeto vários atributos e o passa para a função testada, num segundo caso esse objeto possui apenas algumas variações, mesmo assim o objeto deve ser criado novamente de forma explícita e não reaproveitar o objeto anterior fazendo algumas alterações. Desta forma o programador não precisa percorrer outros lugares para ler os parâmetros utilizados.

## Não é retabalho, é parcelamento
Uma crítica comum aos testes é que parece ser necessário produzir mais código para chegar ao mesmo objetivo, os defensores dizem que este custo extra acaba se pagando a médio prazo. 

Gostaria de compartilhar outra perspectiva, ao fazer os testes antes da implementação nós criamos argumentos que são passados para as funções e depois verificamos que o retorno é o esperado, você praticamente precisa implementar a função dentro do teste, mas com a vantagem de estar num ambiente higiênico e sem distrações.

Quando passa para a implementação o trabalho é copiar o algoritmo que existia no teste para dentro da função, talvez cada caso exija correções e generalizações, mas isto é feito gradativamente sob as versões anteriores e com a condicionante que os testes antigos devem continuar passando.

Desta forma você não está programando duas vezes, está parcelando o desenvolvimento em casos gradativamente mais complexos. Você se apoia no framework para conseguir isolar estas partes de tal forma que consiga as recompor depois na implementação final.

## Apenas renomeações
O que é desenvolvido dentro dos testes acaba migrando para outros arquivos, se não para a função testada, para outros módulos, que também devem possuir seus testes, restando apenas o trabalho de ligar os fios certos nos lugares certo.

Se dentro do teste você precisar desenvolver alguma lógica para verificar o resultado provavelmente esta lógica também está sendo requisitada dentro da implementação e vale a pena tornar isso um módulo próprio que tanto o teste quanto a função implementada fazem uso.

Um padrão comum é o `Arrange Act Assert`. Num primeiro bloco dentro do teste você importa dados e funções que serão organizados e passados para a função que está sendo testada, depois esta função é executada e por fim o retorno dela é comparado com o gabarito. Repare que não deve existir lógicas complicadas dentro dos testes, apenas a modelagem dos argumentos para ficar no padrão apropriado para a função.