# Gastando Objetos
## Demasiado humano
Orientação a objetos é um paradigma mentalmente confortável, você modela o mundo de forma análoga a como já está acostumado a manusear itens rotineiros. Reúne elementos semelhantes em conjuntos distribuídos para facilitar o acesso, talvez estrategicamente perto deles você deixe mecanismos que façam operações relacionados a eles.

É algo intuitivo. Na programação você pode até ser levado a pensar que é a forma final de sofisticação e refinamento, que o desenvolvimento tende a este paradigma conforme vai amadurecendo. Este raciocínio é ingênuo, primeiro porque é um efeito de projeção onde identificamos o que já conhecemos. Não é que tudo leva a orientação a objeto, mas nós tentamos entender o desconhecido primeiro a partir das nossas próprias referências e modos de pensar.

Segundo porque um paradigma que funciona convenientemente bem com nossos modelos mentais tendem a funcionar mal onde nossos modelos mentais também funcionam mal. Fizemos a orientação a objetos nossa imagem semelhança para nos servir e ele possui nossos próprios defeitos e limitações.

## Contando preciosos
Uma pessoa sem experiência quando vai contar muito dinheiro manualmente acaba fazendo como a figura abaixo:
![montes](02.jpg)
Separa na sua frente montes pra facilitar a contagem e vai movimentando cédulas de um lado para o outros.  Isto pode ser um desastre em muitos sentido.

O dinheiro está exposto, qualquer um na mesma sala pode interferir. Ele está saindo da sua mão por vários lugares e aguardando inocente ser vítima da sorte. Pouco importa se colocar em gavetas privadas com bastante cuidado, o problema intrínseco é que você está manuseando os montes, criando estados intermediários e o seu algoritmo é uma forma específica de embaralhar eles.

Uma forma mais adequada seria:
![mesma mão](01.jpg)

## No segredo do closure
Um bloco básico do paradigma funcional é o funtor identidade, que podemos resumir como:
```javascrip
const Box = value => ({
  fold: () => value,
  map: f => Box(f(value)),
})
```
`Box` é uma função que recebe um parâmetro e retorna um objeto com dois atributos:
- `fold` é uma função que recupera o valor do parâmetro passado durante a criação da caixa
- `map`  é uma função que recebe outra função para devolver uma caixa criada com o valor que a segunda função gera com o parâmetro passado durante a criação da caixa 

Confuso né... Aqui um exemplo do uso:

```javascript
Box( Math.random() )
  .map(n => String(n))
  .map(s => s.slice(2))
  .map(s => s.split(''))
  .fold()
```

O valor dos  parâmetro não ficam salvos em nenhuma variável, não há como mudar o valor sem mudar a própria caixa. Esta informação fica salva no _closure_ gerado pela chamada da  função `Box`. Você não espalha seus dados por ai, ele está preso a sua mão e só ela vai poder acessar.