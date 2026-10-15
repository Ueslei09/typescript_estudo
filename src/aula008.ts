  let dados={
     nome: 'João',
     idade: 30,
     email: 'joao@example.com',
     status: 'Ativo',

     ola:()=>{
       console.log('Olá, meu nome é ' + dados.nome);
     },
     info:(p:number)=>{
        console.log('Idade: ' + p);
     }
  }
  dados.nome ='Maria';
  console.log(typeof(dados));
  console.log(dados.nome);
  dados.ola();
  dados.info(dados.idade);