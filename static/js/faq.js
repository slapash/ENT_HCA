const faqData = [
    {
      question: "bloc avancer",
      answer: "Le premier bloc dans la catégorie Mouvement",
      color: "#4a90e2"
    },
    {
      question: "bloc tourner gauche",
      answer: "Le deuxième bloc dans la catégorie Mouvement",
      color: "#4a90e2"
    },
    // ...
    {
      question: "bloc dire",
      answer: "Le premier bloc dans la catégorie Apparence",
      color: "#8a4de8"
    },
    {
      question: "bloc penser",
      answer: "Le deuxième bloc dans la catégorie Apparence",
      color: "#8a4de8"
    },
    // ...
    {
      question: "bloc ajouter un son",
      answer: "Le premier bloc dans la catégorie Sons",
      color: "#bb42c3"
    },
    {
      question: "bloc jouer un son",
      answer: "Le deuxième bloc dans la catégorie Sons",
      color: "#bb42c3"
    },
    // ...
    {
      question: "bloc répéter",
      answer: "Le deuxième bloc dans la catégorie Contrôle",
      color: "#FF9D00"
    },
    {
      question: "bloc répéter indéfiniment",
      answer: "Le troisième bloc dans la catégorie Contrôle",
      color: "#FF9D00"
    },
    // ...
    {
      question: "bloc poser une question",
      answer: "Le huitième bloc dans la catégorie Capteurs",
      color: "#4CBFE6"
    },
    // ...
    {
      question: "bloc définir une variable",
      answer: "Le premier bloc dans la catégorie Variables",
      color: "#f36a1d"
    },
    {
      question: "bloc changer la variable",
      answer: "Le deuxième bloc dans la catégorie Variables",
      color: "#f36a1d"
    },
    {
        question: "bloc aller à (objet)",
        answer: "Le quatrième bloc dans la catégorie Mouvement",
        color: "#4a90e2"
      },
      {
        question: "bloc point vers",
        answer: "Le neuvième bloc dans la catégorie Mouvement",
        color: "#4a90e2"
      },
      {
        question: "bloc changer x par",
        answer: "Le dixième bloc dans la catégorie Mouvement",
        color: "#4a90e2"
      },
      {
        question: "bloc changer y par",
        answer: "Le onzième bloc dans la catégorie Mouvement",
        color: "#4a90e2"
      },
      {
        question: "bloc régler x à",
        answer: "Le douzième bloc dans la catégorie Mouvement",
        color: "#4a90e2"
      },
      {
        question: "bloc régler y à",
        answer: "Le treizième bloc dans la catégorie Mouvement",
        color: "#4a90e2"
      },
      {
        question: "bloc montrer",
        answer: "Le troisième bloc dans la catégorie Apparence",
        color: "#8a4de8"
      },
      {
        question: "bloc cacher",
        answer: "Le quatrième bloc dans la catégorie Apparence",
        color: "#8a4de8"
      },
      {
        question: "bloc basculer en arrière-plan",
        answer: "Le cinquième bloc dans la catégorie Apparence",
        color: "#8a4de8"
      },
      {
        question: "bloc arrêter le son",
        answer: "Le troisième bloc dans la catégorie Sons",
        color: "#bb42c3"
      },
      {
        question: "bloc régler le volume à",
        answer: "Le quatrième bloc dans la catégorie Sons",
        color: "#bb42c3"
      },
      {
        question: "bloc changer le volume par",
        answer: "Le cinquième bloc dans la catégorie Sons",
        color: "#bb42c3"
      },
      {
        question: "bloc attendre jusqu'à",
        answer: "Le sixième bloc dans la catégorie Contrôle",
        color: "#FF9D00"
      },
      {
        question: "bloc arrêter",
        answer: "Le septième bloc dans la catégorie Contrôle",
        color: "#FF9D00"
      },
      {
        question: "bloc créer un clone",
        answer: "Le huitième bloc dans la catégorie Contrôle",
        color: "#FF9D00"
      },
      {
        question: "bloc quand je commence en tant que clone",
        answer: "Le neuvième bloc dans la catégorie Contrôle",
        color: "#FF9D00"
      },
      {
        question: "bloc supprimer ce clone",
        answer: "Le dixième bloc dans la catégorie Contrôle",
        color: "#FF9D00"
      },
      {
        question: "bloc quand un drapeau vert pressé",
        answer: "Le onzième bloc dans la catégorie Contrôle",
        color: "#FF9D00"
      },
      {
        question: "bloc quand la touche pressée",
        answer: "Le douzième bloc dans la catégorie Contrôle",
        color: "#FF9D00"
      },
      // Add these to your existing FAQ data
{
    question: "bloc distance de",
    answer: "Le neuvième bloc dans la catégorie Capteurs",
    color: "#4CBFE6 "
  },
  {
    question: "bloc demander et attendre",
    answer: "Le dixième bloc dans la catégorie Capteurs",
    color: "#4CBFE6"
  },
  {
    question: "bloc réponse",
    answer: "Le onzième bloc dans la catégorie Capteurs",
    color: "#4CBFE6"
  },
  {
    question: "bloc capteur de souris x",
    answer: "Le douzième bloc dans la catégorie Capteurs",
    color: "#4CBFE6"
  },
  {
    question: "bloc capteur de souris y",
    answer: "Le treizième bloc dans la catégorie Capteurs",
    color: "#4CBFE6"
  },
  {
    question: "bloc souris pressée",
    answer: "Le quatorzième bloc dans la catégorie Capteurs",
    color: "#4CBFE6"
  },
  {
    question: "bloc nombre aléatoire",
    answer: "Le quinzième bloc dans la catégorie Capteurs",
    color: "#4CBFE6"
  },
  {
    question: "bloc ajout de liste",
    answer: "Le cinquième bloc dans la catégorie Variables",
    color: "#f36a1d"
  },
  {
    question: "bloc supprimer de la liste",
    answer: "Le sixième bloc dans la catégorie Variables",
    color: "#f36a1d"
  },
  {
    question: "bloc insérer dans la liste",
    answer: "Le septième bloc dans la catégorie Variables",
    color: "#f36a1d"
  },
  {
    question: "bloc remplacer dans la liste",
    answer: "Le huitième bloc dans la catégorie Variables",
    color: "#f36a1d"
  },
  {
    question: "bloc élément de la liste",
    answer: "Le neuvième bloc dans la catégorie Variables",
    color: "#f36a1d"
  },
  {
    question: "bloc longueur de la liste",
    answer: "Le dixième bloc dans la catégorie Variables",
    color: "#f36a1d"
  },
  {
    question: "bloc liste contient",
    answer: "Le onzième bloc dans la catégorie Variables",
    color: "#f36a1d"
  },
  {
    question: "bloc quand le drapeau vert pressé",
    answer: "Le premier bloc dans la catégorie Événements",
    color: "#FFBF00"
  },
  {
    question: "bloc quand la touche pressée",
    answer: "Le deuxième bloc dans la catégorie Événements",
    color: "#FFBF00"
  },
  {
    question: "bloc quand ce sprite cliqué",
    answer: "Le troisième bloc dans la catégorie Événements",
    color: "#FFBF00"
  },
  {
    question: "bloc quand l'arrière-plan bascule",
    answer: "Le quatrième bloc dans la catégorie Événements",
    color: "#FFBF00"
  },
  {
    question: "bloc quand un message reçu",
    answer: "Le cinquième bloc dans la catégorie Événements",
    color: "#FFBF00"
  },
  {
    question: "bloc diffuser un message",
    answer: "Le sixième bloc dans la catégorie Événements",
    color: "#FFBF00"
  },
  {
    question: "bloc diffuser un message et attendre",
    answer: "Le septième bloc dans la catégorie Événements",
    color: "#FFBF00"
  }
  
    // ...
  ];
  
  // The rest of your script.js file
  
  
  const fuse = new Fuse(faqData, {
    keys: ['question', 'answer'],
    includeScore: true,
    threshold: 0.3,
  });
  
  const searchInput = document.getElementById('search');
  const faqContainer = document.getElementById('faq-container');
  
  function renderFAQ(results) {
    faqContainer.innerHTML = '';
  
    results.forEach(result => {
      const faqItem = document.createElement('div');
      faqItem.classList.add('faq-item');
  
      const questionElement = document.createElement('div');
      questionElement.classList.add('question');
      questionElement.textContent = result.item.question;
  
      const categoryColor = document.createElement('div');
      categoryColor.classList.add('category-color');
      categoryColor.style.backgroundColor = result.item.color;
      questionElement.appendChild(categoryColor);
  
      const answerElement = document.createElement('div');
      answerElement.classList.add('answer');
      answerElement.textContent = result.item.answer;
  
      faqItem.appendChild(questionElement);
      faqItem.appendChild(answerElement);
      faqContainer.appendChild(faqItem);
  
      questionElement.addEventListener('click', () => {
        answerElement.style.display = answerElement.style.display === 'none' ? 'block' : 'none';
      });
      
    });
  }
  
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', search);

    function search() {
    const query = searchInput.value;
    if (query === '') {
      renderFAQ(faqData.map(item => ({ item, score: 0 })));
    } else {
      const results = fuse.search(query);
      renderFAQ(results);
    }
  }
  
  searchInput.addEventListener('input', search);
  renderFAQ(faqData.map(item => ({ item, score: 0 })));
  