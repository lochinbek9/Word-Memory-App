

function Layout(props) {
  const { children } = props
  return (
    <>
      <header>
        <h1 className="text-gradient">Copacetic</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <small>Created By: LODEX-X</small>
        <a href="https://github.com/lochinbek9/Word-Memory-App" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/103257271?v=4" alt="" />
          <p>@lochinbek9</p>
          <i className="fa-brands fa-github"></i>
        </a>

      </footer>
    </>
  )
}

export default Layout