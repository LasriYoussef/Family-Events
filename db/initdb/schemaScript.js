db.createUser({
    user: "family_pro_user",
    pwd: "secure_password",
    roles: [{ role: "readWrite", db: "family_pro_db" }]
  });
  
  db = db.getSiblingDB("family_pro_db");
  
  db.users.insertOne({
    username: "admin",
    email: "admin@familypro.com",
    password: "familylasri", // Remplace par un hash réel plus tard
    role: "admin",
    createdAt: new Date()
  });
  
  db.notifications.insertOne({
    title: "Bienvenue sur Family-Event",
    message: "Votre application est prête à l'emploi.",
    createdAt: new Date()
  });
  