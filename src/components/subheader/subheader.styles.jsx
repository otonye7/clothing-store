import styled from 'styled-components';


export const SubHeaderContainer = styled.div`
.navbar {
  background-color: white;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 20;
}





.nav-menu {
  width: 98.5%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  list-style: none;
  text-align: center;
  
}

.nav-links {
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  border-bottom: 3px solid transparent;
}
.fa-code {
  margin-left: 1rem;
}

.nav-item {
  line-height: 40px;
  margin-right: 1rem;
}

.nav-item:after {
  content: "";
  display: block;
  height: 3px;
  width: 0;
  background: transparent;
  transition: width 0.7s ease, background-color 0.5s ease;
}

.nav-item:hover:after {
  width: 100%;
  background: brown;
}

.nav-item .active {
  color: brown;
  border: 1px solid brown;
}

.nav-icon {
  display: none;
}

@media screen and (max-width: 767px) {
  .nav-menu {
    display: flex;
    flex-direction: column;
    width: 80%;
    border-top: 1pxsolid #fff;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: -110%;
    position: fixed;
    opacity: 1;
    transition: all 0.5s ease;
  }

  .nav-menu.active {
    background-color: #F2F2F2;
    left: 0px;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }
  .nav-item .active {
    color: brown;
    border: none;
  }
  .nav-links {
    padding: 1.5rem;
    width: 100%;
    display: table;
  }

  .nav-icon {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
    z-index: 90;
  }
}
`;