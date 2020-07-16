const MESSAGES = {
  COMMANDS: {
    ADMIN: {
      EVAL: {
        name: "eval",
        description: "Renvoie un code js testé.",
        aliases: [""],
        category: "admin",
        isAdmin: false,
        permissions: true,
        cooldown: 3,
        usage: "<code_test_js>",
        args: true
      },
      CONFIG: {
        name: "config",
        description: "Modifier la db.",
        aliases: [""],
        category: "admin",
        isAdmin: false,
        permissions: true,
        cooldown: 3,
        usage: "<key> <value>",
        args: true
      }
    },
    MISC: {
      PING: {
        name: "ping",
        description: "Temps de réponse serveur / client.",
        aliases: "pg",
        category: "misc",
        isAdmin: false,
        permissions: false,
        cooldown: 3,
        args: false
      },
      DICE: {
        name: "dice",
        description: "Lancé de dés !",
        aliases: "d",
        category: "misc",
        isAdmin: false,
        permissions: false,
        cooldown: 3,
        args: false
      },
      HELP: {
        name: "help",
        description: "Liste des commandes disponibles.",
        aliases: ["h"],
        category: "misc",
        isAdmin: false,
        permissions: false,
        cooldown: 3,
        usage: "<command_name>",
        args: false
      },
      MEMBERS: {
        name: "members",
        aliases: [""],
        category: "misc",
        description: "Affiche la liste des membres de la guilde",
        permissions: false,
        isAdmin: false,
        cooldown: 5,
        args: false,
        usage: ""
      }
    },
    GVG: {
      GVGAUTO: {
        name: "gvgauto",
        aliases: "gvg",
        category: "gvg",
        description: "Annonce automatique des défenses gvg (grosses defs / trolls defs)",
        isAdmin: false,
        permissions: true,
        args: true,
        usage: "Exemple: @gvg start | @gvg stop"
      }
    },
    MODERATION: {
      CLEAR: {
        name: "clear",
        aliases: ["clear", "cls", "del"],
        category: "moderation",
        description: "Suppression des messages",
        permissions: true,
        isAdmin: false,
        cooldown: 3,
        args: true,
        usage: "<nbr (1-100)>"
      },
      EMBED: {
        name: "embed",
        aliases: ["an", "ann"],
        category: "moderation",
        description: "Envoie un embed !",
        isAdmin: false,
        permissions: true,
        args: true,
        usage: "<color r,g,b,y,o> <texte>"
      },
      RELOAD: {
        name: "reload",
        description: "Reboot le bot.",
        aliases: ["reboot", "restart"],
        category: "moderation",
        permissions: true,
        isAdmin: false,
        args: false,
        usage: ""
      },
      TG: {
        name: "tg",
        aliases: ["tg"],
        category: "moderation",
        description: "Suppression des x derniers messages du membre.",
        permissions: true,
        isAdmin: true,
        cooldown: 3,
        args: true,
        usage: "<user> <nbr (1-100)>"
      }
    },
    TARTA: {
      TARTA: {
        name: "tarta",
        aliases: ["trt", "t"],
        category: "tarta",
        description: "user et lvl Tarta",
        isAdmin: false,
        permissions: true,
        args: true,
        usage: "<tonMsg>"
      }
    }
  }
};

const CHANNELS = {
  TARTA: {
    id: "727579420042461235"
  },
  GVG: {
    id: "713768108799557752"
  },
  LOG: {
    id: "727596239465611296"
  }
};

const USERID = {
  AUTHOR: {
    id: "687034327841898526"
  }
};

exports.MESSAGES = MESSAGES;
exports.CHANNELS = CHANNELS;
exports.USERID = USERID;
