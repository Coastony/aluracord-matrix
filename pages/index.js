import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

function Titulo(props){
    const Tag = props.tag || 'h1';
    return (
        <>
        <Tag>{props.children}</Tag>
        <style jsx>{`
         ${Tag} {
            color: ${appConfig.theme.colors.neutrals['000']};
            font-size: 20px;
            font-weight: 600;
        }
         `}</style>
        </>
    )
}

// Componente React
// function HomePage() {
//     // JSX
//     return (
//     <div>
//     <GlobalStyle/>
//      <Titulo tag="h2">Boas vindas de volta!</Titulo>
//      <h2>Discord - Alura Matrix</h2>
//     </div>
//     )
// }
  
// export default HomePage

export default function PaginaInicial() {
    //const username = 'Coastony';
    const [username, setUsername] = React.useState('Coastony');
    const roteamento = useRouter();
  
    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.neutrals[100], 
            backgroundImage: 'url(https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXEwGCJ_xHOvzmJXjc5Bw7DJXFKjzNHkKzKqsePNOJFHrgksfHUDeu8V9qAJIQmEx2FjlkK-BBqggVXSlXbZJVhRPuvx.jpg?r=7cc)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px', 
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[600], opacity: 0.9,
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (infosdoEvento) {
                infosdoEvento.preventDefault();
                console.log('Alguém submeteu o form');
                roteamento.push('/chat');
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px'
              }}
            >
              <Titulo tag="h2">Bem vindo de volta!</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>

              {/* <input
               type="text"
               value={username}
               onChange = {function (event) {
                console.log('usuario digitou', event.target.value);
                // Onde tá o valor
                const valor = event.target.value;
                // Trocar o valor da variável
                // Através do React e avisa se precisa
                setUsername(valor);
               }}
              /> */}
  
              <TextField
              value={username}
              onChange = {function (event) {
                console.log('usuario digitou', event.target.value);
                // Onde tá o valor
                const valor = event.target.value;
                // Trocar o valor da variável
                // Através do React e avisa se precisa
                setUsername(valor);

                // Desafios - Aula 2

                // se o campo tiver menos de 2 caracteres, desabilitar o campo e não mostrar
                // a imagem, se tiver mais exibir normalmente - omariosouto

                //Customizar a tela - peas
              
               }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals[900],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }
