const sharp = require("sharp");

sharp("sub.jpg").resize(500).toFile("resized.png");
