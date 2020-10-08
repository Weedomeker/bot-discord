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
    COLLECTORS: {
      MSGCOLLECTOR: {
        name: "msgcollector",
        description: "Collecte les messages.",
        aliases: ["mcol"],
        category: "collectors",
        isAdmin: false,
        permissions: true,
        cooldown: 3,
        usage: "<terme_collect>",
        args: true
      }
    },
    EXPERIENCE: {
      REMOVEEXPERIENCE: {
        name: "removeexperience",
        description: "Enlève de l'xp à l'utilisateur.",
        aliases: ["rmxp","removeexperience"],
        category: "experience",
        isAdmin: false,
        permissions: true,
        cooldown: 3,
        usage: "<@user> <xp>",
        args: true
      },
      ADDEXPERIENCE: {
        name: "addexperience",
        description: "Ajout xp à l'utilisateur.",
        aliases: ["addxp","addexperience"],
        category: "experience",
        isAdmin: false,
        permissions: true,
        cooldown: 3,
        usage: "<@user> <xp>",
        args: true
      },
      USEREXPERIENCE: {
        name: "userexperience",
        description: "Exp de l'utilisateur.",
        aliases: ["usrxp","userexperience"],
        category: "experience",
        isAdmin: false,
        permissions: false,
        cooldown: 10,
        usage: "",
        args: false
      }
    },
    MISC: {
      SLIP: {
        name: "slip",
        description: "ça dérape !",
        aliases: "slip",
        category: "misc",
        isAdmin: false,
        permissions: false,
        cooldown: 3,
        args: false
      },
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
        args: false
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
      ADDLANTERN: {
        name: "addlantern",
        aliases: ["addlant", "addl"],
        category: "tarta",
        description: "Ajoute une lanterne à l'utilisateur",
        isAdmin: false,
        permissions: true,
        cooldown: 0,
        args: false,
        usage: "<membre>"
      },
      LANTERNS: {
        name: "lanterns",
        aliases: ["lant", "lanternes"],
        category: "tarta",
        description: "Lanternes en cours des membres.",
        isAdmin: false,
        permissions: true,
        cooldown: 0,
        args: false,
        usage: ""
      },
      REMOVELANTERN: {
        name: "removelantern",
        aliases: ["rmlant", "rl"],
        category: "tarta",
        description: "Retire une lanterne à l'utilisateur",
        isAdmin: false,
        permissions: true,
        cooldown: 0,
        args: false,
        usage: "<membre>"
      },
      TARTA: {
        name: "tarta",
        aliases: ["trt", "t"],
        category: "tarta",
        description: "user et lvl Tarta",
        isAdmin: false,
        permissions: true,
        cooldown: 0,
        args: true,
        usage: "<tonMsg>"
      }
    }
  }
};

const CHANNELS = {
  TARTA: {
    id: "703645975721410660"
  },
  GVG: {
    id: "703645929483272283"
  },
  LOG: {
    id: "733684325870207126"
  },
  ANNC: {
    id: "678241770278223883"
  },
  DESK: {
    id: "697612522907369533"
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
