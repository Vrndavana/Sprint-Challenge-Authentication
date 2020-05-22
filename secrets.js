module.exports = {
    jwtSecret: process.env.JWT_SECRET || "Secrets don't keep friends",
    hashRounds: process.env.HASH_ROUNDS || 8,
  };