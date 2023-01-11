function Menu() {
  return (
    <div id="menu">
      <div>
        <a href="/">Show home</a>
      </div>
      <div>
        <a href="/add/12">Add / Sub</a>
      </div>
      <div>
        <a href="/users/ABC123/">Show users</a>
      </div>
      <div>
        <a href="/withparms/?parm=192">With parms</a>
      </div>
    </div>
  );
}

export default Menu;
