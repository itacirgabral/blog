## O errado que foi melhor
Nós esquecemos de pegar as chaves do laboratório para o minicurso de testes unitários, de última hora conseguimos usar a sala da empesa junior. Era bem menor e todos ficamos em volta de uma mesa no centro. No laboratório cada um teria um computador e estariam dispostos em fila, além de usar o datashow. Na salinha nós tínhamos alguns monitores disponíveis e alguns trouxeram notebook.

Isto alterou bastante a dinâmica e acho que ficou melhor, era muito fácil interrompe, fazer perguntas e considerações, estávamos um no ombro do outro. Logo as pessoas se organizaram como programação em pareres e dava pra passar o cabo do monitor pra clonar o que cada um estava editando e assim todos acompanhavam. 

## O hábito faz o monge
Meu primeiro interesse no minicurso era apresentar concentos mais avançados de javascript, queria chegar em composição e injeção de dependências, principalmente fazer isso de forma natural conforme se tenta simplificar o código quando a estrutura já está no limite da compreensão.

Para me aquecer comecei a fazer testes no estilo TDD no meu trabalho. Devia ter feito isso antes! Vale a pena fazer testes mesmo se acontecer uma catástrofe no disco e você perder todos os testes. O exercício de fazer testes guia o seu estilo a um código melhor.

O objetivo final não é ter os testes e garantir a conformidade do código a uma especificação, a maior vantagem é que seu código é testável. Significa que seu raciocínio está isolado, que aquele módulo é independente e possui um propósito único. Ou seja, tem baixo acoplamento e alta coesão. Ele é uma unidade.

Você acaba desenvolvendo o algoritmo dentro dos testes num ambiente seguro, limpo e bem iluminado. Depois que esta joia está pronta e lapidada você incorpora ela no código. 

## Espada de thundera
O código base para o minicurso já estava pronto há alguns meses, eu tinha deixado várias armadilhas para que o tropeço dos alunos fossem a deixa para uma explicação ou a introdução de algum novo conceito. Claro que eu esqueci e cai em várias delas. Mas os testes servem pra isso, um corrimão pra te segurar caso você perca o equilíbrio e indicar o caminho.

É como se você tivesse sensores em todo o código que ao menor sinal de anomalias disparam o alarme antes que o problema desencadeie em cascata um funcionamento incorreto. Ou pior, quando estes defeitos não desencadeiam um funcionamento incorreto aparecente.

Este radar consegue seguir o rastro de pólvora e destacar no mapa aonde as falhas estão. Idealmente o teste deveria identificar a origem, mas outro uso que traz um grande alívio é garantir quais partes do código estão corretos, então mesmo que não se saiba como o desenrolar o defeito eliminamos da preocupação uma boa parte do domínio

# AAA 
Causa controvérsias a discussão sobre se podemos fazer mocks e onde o uso disto seria positivo, quando o sistema deve causas efeitos colaterais, como salvar algo no banco ou fazer requisições a serviços externos, não há como injetar exatamente este efeito e algum tipo de stub acaba sendo usado. Talvez valha mais indicar princípios a seguir e dar exemplos de como seria possível melhorar continuamente os testes e o código.

- repetir é bom
- não é retabalho, é parcelamento
- não deve existir cálculos, apenas renomeações