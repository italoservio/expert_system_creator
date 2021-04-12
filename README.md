<h1 align="center">Expert System Creator 🎓</h1>

<p align="center">
Web application developed using NodeJS w / ExpressJS, VueJS and SQLite that allows the creation and use of expert systems.
</p>

<br />

<h3 align="center">🟠 Status: Under development</h3>

<br />

<h3 align="center">⚠ Warning</h3>
<p align="center">You can create expert systems on several things. <br />
When creating elements, to use the same questions, you must save the system with an element that already has the question, and only then, when creating another element, the question will be available for import. <br />
If you do not use the question import and register the same question twice, the system will not work as expected.</p>

<br />

<h3 align="center">😍 How to use</h3>
<p align="center">The first step after downloading the project is to update the NPM packages. To do this you need to have NodeJS and NPM installed (<a href="https://nodejs.org/en/">Go to NodeJS download page</a>). To do this, open the terminal in the project folder and type:</p>
<pre>
  npm update
</pre>
<p align="center">If you want to recreate the database, delete the file "db.sqlite", and in the file "db.js" uncomment line 10 on the first run:</p>
<pre>
  (async () => { await sequelize.sync(); })();
</pre>
<p align="center">To run the project, open the terminal in the project folder and execute the command:</p>
<pre>
  npm run one
</pre>
<p align="center">The server will go up at port 3000. To access the system, just type in your browser: <a href="http://localhost:3000">http://localhost:3000</a></p>


<br />

<h3 align="center">📸 System prints</h3>
<p align="center">See some system prints</p>
<table>
	<tr>
		<td><img src="https://i.imgur.com/Mj26Prb.png" height="500px" width="500px" alt="Home"></td>
		<td><img src="https://i.imgur.com/e0L7iAB.png" height="500px" width="500px" alt="Manage"></td>
	</tr>
	<tr>
		<td><img src="https://i.imgur.com/mwxyN0q.png" height="500px" width="500px" alt="Element"></td>
		<td><img src="https://i.imgur.com/HA3gOnX.png" height="500px" width="500px" alt="Running"></td>
	</tr>
	<tr>	
		<td><img src="https://i.imgur.com/RdFG0bF.png" height="500px" width="500px" alt="Result"></td>
		<td><img src="https://i.imgur.com/nDEzjQt.png" height="500px" width="500px" alt="Import"></td>
	</tr>
</table>

<br />

<h3 align="center">⚡ ER Diagram</h3>
<p align="center">Understand the database structure</p>
<h1 align="center">
  <img alt="First screen" src="https://i.imgur.com/itRLazf.png" />
</h1>

<br />

<h3 align="center">🎨 Contributor(s)</h4>
<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/ItaloServio">
        <img src="https://avatars1.githubusercontent.com/u/60075865?s=460&u=407042a6a58218d29495ca19dda1bef5ca4540c3&v=4" width="100px;" alt="Profile"/>
        <br />
        <sub>
          <b>Ítalo Sérvio</b>
        </sub>
      </a>
  </tr>  
</table>
