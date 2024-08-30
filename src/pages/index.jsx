import {
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  Input,
  Button,
  Title,
  InputLabel
} from '../styles'

import UsersImage from '../../src/assets/logolink.jpg'

function Home() {

  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt='imagem-codigo' />
      </TopBackground>

      <Form>
        <Title>Cadastro de Usuários</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="tex" placeholder="Nome do usuário" />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do usuario" />
          </div>
        </ContainerInputs>

        <div style={{ width: '100%'}}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type='email' placeholder='E-mail do usuário' />
        </div>

        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>
  )
}

export default Home
