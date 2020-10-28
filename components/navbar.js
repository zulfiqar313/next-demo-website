import Link from 'next/link'
const Navbar= ()=> (
<nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">Next JS </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    //    {/* <style jsx>
    //        {`
    //        ul{
    //            background:#333;
    //            color:#FFFFFF;
    //            list-style:none;
    //            display:flex;
    //        }
    //        ul li{
    //            font-size:18px;
    //            margin-right:20px;
    //        }
    //        ul li a{
    //            color:#FFFFFF;
    //            text-decoration:none;
    //        }
    //        `}
    //    </style> */}
       
       
       
      
)

export default Navbar