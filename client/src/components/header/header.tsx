import "./Header.css";
import React from "react";

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerLink">
        <a href="https://github.com/CoopDouce/CYC-Property-Manager" title="GitHub Repo">
          Click Here To See Our Other Businesses
        </a>
      </div>
      <header className="headerLogo">
        <img className="CYC-Logo" src="/assets/CYC-Logo.png" alt="CYC Logo" />
        <h1 className="headerTitle">Property Manager</h1>
      </header>

      <div className="headerLogin">
        <button className="headerButton" onClick={() => { document.getElementById('id01')!.style.display = 'block'; }}>Login</button>

        <div id="id01" className="modal">
          <form className="modal-content animate" action="/action_page.php" method="post">
            <div className="modalImg">
              <span onClick={() => { document.getElementById('id01')!.style.display = 'none'; }} className="close" title="Close Modal">&times;</span>
              <img src="/assets/modalImg.jpg" about="Avatar" className="avatar" />
            </div>

            <div className="modalInformation">
              <label htmlFor="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required />

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />

              <button type="submit">Login</button>
              <label className="rememberBox">
                <input type="checkbox" defaultChecked={true} name="remember" /> Remember me
              </label>
            </div>

            <div className="modalFooter">
              <button type="button" onClick={() => { document.getElementById('id01')!.style.display = 'none'; }} className="cancelbtn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;