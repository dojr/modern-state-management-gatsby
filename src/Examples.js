export const example_1 = `
const Wrapper = ({ children }) => (
    <div style={{
        background: 'papayawhip',
        width: '100%',
        padding: '2rem'
    }}>
        {children}
    </div>
)

const Count = () => {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <h3 style={{ color: 'palevioletred' }}>
                count: {count}
            </h3>
            <button onClick={() => setCount(count + 1)} >
                Increment
            </button>
        </>
    )
}

render (
    <Wrapper>
        <Count />
    </Wrapper>
)
`

export const example_2 = `
const Wrapper = ({ children }) => (
    <div style={{
        background: 'papayawhip',
        width: '100%',
        padding: '2rem'
    }}>
        {children}
    </div>
)

const CountContext = React.createContext();

const CountProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  
  return (
    <CountContext.Provider value={{ count, setCount }} >
      {children}
    </CountContext.Provider>
  )
}

function useCount() {
  const context = React.useContext(CountContext)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

const Title = () => {
  const { count } = useCount();
  
  return (
    <h3 style={{ color: 'palevioletred' }}>
        count: {count}
    </h3>
  )
}

const Button = () => {
  const { setCount } = useCount();
  
  return (
    <button onClick={() => setCount(count => count + 1)} >
        Increment
    </button>
  )
}

const Count = () => {
    const [count, setCount] = React.useState(0);

    return (
        <CountProvider>
            <Title />
            <Button />
        </CountProvider>
    )
}

render (
    <Wrapper>
        <Count />
    </Wrapper>
)

`

export const example_3  = `
function createContainer(useHook) {
    const Context = React.createContext(null);

    function Provider(props) {
        const value = useHook(props.initialState);
        return <Context.Provider value={value}>{props.children}</Context.Provider>;
    }

    function useContainer() {
        const value = React.useContext(Context);
        if (value === null) {
            throw new Error('Component must be wrapped with <Container.Provider>');
        }
        return value;
    }

    return { Provider, useContainer };
}

function useContainer(container){
    return container.useContainer();
}

const Wrapper = ({ children }) => (
    <div style={{
        background: 'papayawhip',
        width: '100%',
        padding: '2rem'
    }}>
        {children}
    </div>
)

const Count = () => {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <h3 style={{ color: 'palevioletred' }}>
                count: {count}
            </h3>
            <button onClick={() => setCount(count + 1)} >
                Increment
            </button>
        </>
    )
}

render (
    <Wrapper>
        <Count />
    </Wrapper>
)

`

export const example_4 = `
function createContainer(useHook) {
    const Context = React.createContext(null);

    function Provider(props) {
        const value = useHook(props.initialState);
        return <Context.Provider value={value}>{props.children}</Context.Provider>;
    }

    function useContainer() {
        const value = React.useContext(Context);
        if (value === null) {
            throw new Error('Component must be wrapped with <Container.Provider>');
        }
        return value;
    }

    return { Provider, useContainer };
}

function useContainer(container){
    return container.useContainer();
}

const Wrapper = ({ children }) => (
    <div style={{
        background: 'papayawhip',
        width: '100%',
        padding: '2rem'
    }}>
        {children}
    </div>
)

const useCountProvider = ({ iniitalCount}) => {
  const [count, setCount] = React.useState(iniitalCount);
  
  return {
    // state
    count,
    
    // callbacks
    setCount,
  }
}

const { Provider: CountProvider, useContainer: useCount } = createContainer(useCountProvider);

const Count = () => {
    const { count, setCount } = useCount();

    return (
        <>
            <h3 style={{ color: 'palevioletred' }}>
                count: {count}
            </h3>
            <button onClick={() => setCount(count + 1)} >
                Increment
            </button>
        </>
    )
}

render (
    <CountProvider initialState={{ iniitalCount: 3 }}>
      <Wrapper>
          <Count />
      </Wrapper>
    </CountProvider >
)


`