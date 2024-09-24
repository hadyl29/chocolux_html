<form id="loginForm">
  <input type="text" id="username" placeholder="Nom d'utilisateur">
  <input type="password" id="password" placeholder="Mot de passe">
  <button type="submit">Se connecter</button>
</form>

<script>
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert('Connexion réussie');
    } else {
      alert('Échec de la connexion');
    }
  });
</script>
localhost