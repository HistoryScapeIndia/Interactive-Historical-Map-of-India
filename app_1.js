// Historical data from the provided JSON
const historicalData = {
  "periods": [
    {
      "id": "ancient",
      "name": "Ancient India",
      "timeRange": "3300 BCE - 700 CE",
      "color": "#8B4513"
    },
    {
      "id": "medieval", 
      "name": "Medieval India",
      "timeRange": "700 CE - 1857 CE",
      "color": "#B8860B"
    },
    {
      "id": "modern",
      "name": "Modern India",
      "timeRange": "1857 CE - 1947 CE", 
      "color": "#228B22"
    }
  ],
  "events": [
    {
      "id": "indus_valley",
      "name": "Indus Valley Civilization",
      "period": "ancient",
      "year": "2500-1750 BCE",
      "location": "Harappa and Mohenjo-daro",
      "latitude": 27.3753,
      "longitude": 68.1378,
      "description": "One of the world's oldest civilizations, known for advanced urban planning, drainage systems, and sophisticated trade networks.",
      "significance": "Represents the earliest known urban civilization in the Indian subcontinent with remarkable city planning.",
      "quiz": {
        "question": "What was the Indus Valley Civilization most famous for?",
        "options": ["Advanced urban planning", "Great wars", "Religious temples", "Mountain settlements"],
        "answer": 0
      },
      "image": "https://pplx-res.cloudinary.com/image/upload/v1754693367/pplx_project_search_images/f69c9b607662912fe72ac5719222f6997411ba3c.png"
    },
    {
      "id": "battle_ten_kings",
      "name": "Battle of Ten Kings",
      "period": "ancient",
      "year": "~14th century BCE",
      "location": "River Ravi (ancient Parushni), Punjab",
      "latitude": 31.6340,
      "longitude": 74.8723,
      "description": "Legendary battle mentioned in the Rigveda between Bharata tribal king and alliance of ten tribes.",
      "significance": "One of the earliest recorded battles in Indian history, mentioned in Vedic texts.",
      "quiz": {
        "question": "The Battle of Ten Kings is mentioned in which ancient text?",
        "options": ["Mahabharata", "Ramayana", "Rigveda", "Upanishads"],
        "answer": 2
      }
    },
    {
      "id": "kalinga_war",
      "name": "Kalinga War",
      "period": "ancient", 
      "year": "261 BCE",
      "location": "Dhauli, Odisha",
      "latitude": 20.1923,
      "longitude": 85.6501,
      "description": "Major war fought between Emperor Ashoka and the kingdom of Kalinga. Ashoka's victory led to his conversion to Buddhism.",
      "significance": "Turning point that led Emperor Ashoka to embrace Buddhism and non-violence, profoundly influencing Indian philosophy.",
      "quiz": {
        "question": "What major change did Emperor Ashoka undergo after the Kalinga War?",
        "options": ["Became more aggressive", "Converted to Buddhism", "Abdicated the throne", "Started conquering more territories"],
        "answer": 1
      }
    },
    {
      "id": "alexander_porus",
      "name": "Battle of Hydaspes",
      "period": "ancient",
      "year": "326 BCE", 
      "location": "Near Jhelum River, Punjab",
      "latitude": 32.9328,
      "longitude": 73.7296,
      "description": "Alexander the Great's forces defeated King Porus, but Porus's brave resistance impressed Alexander.",
      "significance": "Marked the easternmost advance of Alexander's conquests and showcased Indian military prowess.",
      "quiz": {
        "question": "Who was the Indian king who fought against Alexander the Great?",
        "options": ["Chandragupta", "Porus", "Ashoka", "Harsha"],
        "answer": 1
      }
    },
    {
      "id": "first_battle_tarain",
      "name": "First Battle of Tarain",
      "period": "medieval",
      "year": "1191 CE",
      "location": "Taraori, Haryana", 
      "latitude": 29.4504,
      "longitude": 76.9367,
      "description": "Prithviraj Chauhan defeated Muhammad Ghori, displaying Rajput military strength.",
      "significance": "Last major victory of Hindu kingdoms against Islamic invasions before centuries of Muslim rule.",
      "quiz": {
        "question": "Who won the First Battle of Tarain?",
        "options": ["Muhammad Ghori", "Prithviraj Chauhan", "Akbar", "Babur"],
        "answer": 1
      }
    },
    {
      "id": "second_battle_tarain",
      "name": "Second Battle of Tarain", 
      "period": "medieval",
      "year": "1192 CE",
      "location": "Taraori, Haryana",
      "latitude": 29.4504,
      "longitude": 76.9367,
      "description": "Muhammad Ghori defeated Prithviraj Chauhan, laying foundation for centuries of Muslim rule in North India.",
      "significance": "Established Muslim dominance in North India and ended the reign of the last Hindu emperor of Delhi.",
      "quiz": {
        "question": "The Second Battle of Tarain led to which major historical change?",
        "options": ["End of Mughal rule", "Beginning of British rule", "Start of Muslim rule in North India", "Formation of Maratha empire"],
        "answer": 2
      }
    },
    {
      "id": "first_battle_panipat",
      "name": "First Battle of Panipat",
      "period": "medieval",
      "year": "1526 CE",
      "location": "Panipat, Haryana",
      "latitude": 29.3909,
      "longitude": 76.9635,
      "description": "Babur defeated Ibrahim Lodi, establishing the Mughal Empire in India.",
      "significance": "Marked the beginning of Mughal rule that would dominate India for over 300 years.",
      "quiz": {
        "question": "The First Battle of Panipat established which empire in India?",
        "options": ["British Empire", "Mughal Empire", "Maratha Empire", "Vijayanagara Empire"],
        "answer": 1
      },
      "image": "https://pplx-res.cloudinary.com/image/upload/v1754682743/pplx_project_search_images/047634d174f9e8788baa29089fa5ea1368b9cc58.png"
    },
    {
      "id": "battle_plassey",
      "name": "Battle of Plassey",
      "period": "medieval",
      "year": "1757 CE",
      "location": "Palashi, West Bengal",
      "latitude": 23.7957,
      "longitude": 88.2434,
      "description": "Robert Clive's British forces defeated Siraj-ud-Daula, marking the start of British colonial rule.",
      "significance": "Beginning of British Empire in India, leading to 190 years of colonial rule.",
      "quiz": {
        "question": "The Battle of Plassey marked the beginning of which colonial power's rule in India?",
        "options": ["Portuguese", "French", "Dutch", "British"],
        "answer": 3
      }
    },
    {
      "id": "revolt_1857",
      "name": "Revolt of 1857",
      "period": "modern",
      "year": "1857 CE",
      "location": "Meerut, Delhi, Lucknow",
      "latitude": 28.9845,
      "longitude": 77.7064,
      "description": "First major uprising against British rule, also called India's First War of Independence.",
      "significance": "First organized resistance to British colonial rule, involving multiple regions and communities.",
      "quiz": {
        "question": "The Revolt of 1857 is also known as?",
        "options": ["Sepoy Mutiny", "First War of Independence", "Both A and B", "None of these"],
        "answer": 2
      }
    },
    {
      "id": "jallianwala_bagh",
      "name": "Jallianwala Bagh Massacre",
      "period": "modern",
      "year": "1919 CE", 
      "location": "Amritsar, Punjab",
      "latitude": 31.6205,
      "longitude": 74.8765,
      "description": "British troops fired on unarmed civilians, killing hundreds and galvanizing the independence movement.",
      "significance": "Turning point that intensified the Indian independence movement and exposed British brutality.",
      "quiz": {
        "question": "Who was the British officer responsible for the Jallianwala Bagh Massacre?",
        "options": ["General Dyer", "Lord Curzon", "Robert Clive", "Warren Hastings"],
        "answer": 0
      }
    },
    {
      "id": "salt_march",
      "name": "Salt March (Dandi March)",
      "period": "modern",
      "year": "1930 CE",
      "location": "Sabarmati to Dandi, Gujarat",
      "latitude": 20.8856,
      "longitude": 72.8287,
      "description": "Gandhi's 241-mile march to protest British salt monopoly, launching civil disobedience movement.",
      "significance": "Iconic act of non-violent resistance that inspired global civil rights movements.",
      "quiz": {
        "question": "How many miles did Gandhi walk during the Salt March?",
        "options": ["200 miles", "241 miles", "300 miles", "180 miles"],
        "answer": 1
      },
      "image": "https://pplx-res.cloudinary.com/image/upload/v1755500513/pplx_project_search_images/59de9807288c744b15ae3751e7ac37b377e48a0f.png"
    }
  ],
  "monuments": [
    {
      "id": "taj_mahal",
      "name": "Taj Mahal",
      "location": "Agra, Uttar Pradesh",
      "latitude": 27.173891,
      "longitude": 78.042068,
      "period": "medieval",
      "built": "1632-1653 CE",
      "year": "1632-1653 CE",
      "description": "Magnificent marble mausoleum built by Shah Jahan for his wife Mumtaz Mahal.",
      "significance": "UNESCO World Heritage Site and symbol of eternal love, showcasing Mughal architecture.",
      "quiz": {
        "question": "Who built the Taj Mahal?",
        "options": ["Akbar", "Shah Jahan", "Babur", "Aurangzeb"],
        "answer": 1
      }
    },
    {
      "id": "red_fort",
      "name": "Red Fort",
      "location": "Delhi",
      "latitude": 28.6562,
      "longitude": 77.2410,
      "period": "medieval", 
      "built": "1639-1648 CE",
      "year": "1639-1648 CE",
      "description": "Mughal fortified palace serving as the main residence of the Mughal emperors.",
      "significance": "Symbol of Indian independence, where the Prime Minister hoists the national flag annually.",
      "quiz": {
        "question": "The Red Fort is located in which city?",
        "options": ["Mumbai", "Delhi", "Kolkata", "Agra"],
        "answer": 1
      }
    },
    {
      "id": "qutub_minar",
      "name": "Qutub Minar",
      "location": "Delhi",
      "latitude": 28.5244,
      "longitude": 77.1855,
      "period": "medieval",
      "built": "1193 CE onwards",
      "year": "1193 CE onwards",
      "description": "73-meter tall victory tower built by Qutub-ud-din Aibak.",
      "significance": "Tallest brick minaret in the world and UNESCO World Heritage Site.",
      "quiz": {
        "question": "Who built the Qutub Minar?",
        "options": ["Akbar", "Qutub-ud-din Aibak", "Alauddin Khilji", "Babur"],
        "answer": 1
      }
    },
    {
      "id": "hampi",
      "name": "Hampi",
      "location": "Karnataka", 
      "latitude": 15.3350,
      "longitude": 76.4600,
      "period": "medieval",
      "built": "14th-16th centuries CE",
      "year": "14th-16th centuries CE",
      "description": "Ruins of the Vijayanagara Empire capital with stunning boulder landscapes.",
      "significance": "UNESCO World Heritage Site showcasing South Indian temple architecture.",
      "quiz": {
        "question": "Hampi was the capital of which empire?",
        "options": ["Mughal Empire", "Maratha Empire", "Vijayanagara Empire", "Chola Empire"],
        "answer": 2
      }
    }
  ]
};

// Application state
let currentFilter = 'all';
let allEvents = [];
let currentQuizEvent = null;
let selectedOption = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    showLoading(true);
    
    // Combine events and monuments
    allEvents = [...historicalData.events, ...historicalData.monuments];
    console.log('Total events loaded:', allEvents.length);
    
    // Initialize markers
    setTimeout(() => {
        createMarkers();
        showLoading(false);
    }, 1000);
    
    // Setup event listeners
    setupEventListeners();
    
    // Initial animation
    animateInitialLoad();
});

function showLoading(show) {
    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) {
        if (show) {
            loadingIndicator.classList.remove('hidden');
        } else {
            loadingIndicator.classList.add('hidden');
        }
    }
}

function animateInitialLoad() {
    // Animate elements with staggered delays
    const elements = document.querySelectorAll('.filter-section, .map-section, .timeline-section');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Period filter buttons
    const periodButtons = document.querySelectorAll('.period-btn');
    periodButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log('Period button clicked:', e.target.dataset.period);
            const period = e.target.dataset.period;
            filterByPeriod(period);
            
            // Update active state
            periodButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
    
    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Reset view
    const resetBtn = document.getElementById('resetView');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetView);
    }
    
    // Timeline slider
    const timelineRange = document.getElementById('timelineRange');
    if (timelineRange) {
        timelineRange.addEventListener('input', handleTimelineChange);
    }
    
    // Event panel close
    const closePanel = document.getElementById('closePanel');
    if (closePanel) {
        closePanel.addEventListener('click', closeEventPanel);
    }
    
    // Click outside panel to close
    const eventPanel = document.getElementById('eventPanel');
    if (eventPanel) {
        eventPanel.addEventListener('click', (e) => {
            if (e.target === eventPanel) {
                closeEventPanel();
            }
        });
    }
    
    // ESC key to close panel
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && eventPanel && !eventPanel.classList.contains('hidden')) {
            closeEventPanel();
        }
    });
}

function createMarkers() {
    console.log('Creating markers...');
    const markersContainer = document.getElementById('markersContainer');
    if (!markersContainer) {
        console.error('Markers container not found');
        return;
    }
    
    markersContainer.innerHTML = '';
    
    allEvents.forEach((event, index) => {
        const marker = createMarker(event);
        markersContainer.appendChild(marker);
        
        // Animate marker appearance with delay
        setTimeout(() => {
            marker.style.opacity = '1';
            marker.style.transform = 'scale(1)';
        }, index * 100);
    });
    
    console.log('Markers created:', markersContainer.children.length);
}

function createMarker(event) {
    const marker = document.createElement('div');
    marker.className = `marker marker--${event.period}`;
    marker.dataset.eventId = event.id;
    
    // Convert lat/lng to pixel coordinates (simplified projection)
    const { x, y } = latLngToPixels(event.latitude, event.longitude);
    marker.style.left = `${x}px`;
    marker.style.top = `${y}px`;
    
    // Initial state for animation
    marker.style.opacity = '0';
    marker.style.transform = 'scale(0)';
    
    // Add click event
    marker.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Marker clicked:', event.name);
        showEventDetails(event);
    });
    
    // Add tooltip on hover
    marker.title = `${event.name} (${event.year || event.built})`;
    
    return marker;
}

function latLngToPixels(lat, lng) {
    // Simplified conversion for India map bounds
    // India approximately: lat 8-37, lng 68-97
    const mapWidth = 800;
    const mapHeight = 600;
    
    const latMin = 8;
    const latMax = 37;
    const lngMin = 68;
    const lngMax = 97;
    
    const x = ((lng - lngMin) / (lngMax - lngMin)) * mapWidth;
    const y = mapHeight - ((lat - latMin) / (latMax - latMin)) * mapHeight;
    
    return { x, y };
}

function filterByPeriod(period) {
    console.log('Filtering by period:', period);
    currentFilter = period;
    const markers = document.querySelectorAll('.marker');
    
    markers.forEach(marker => {
        const eventId = marker.dataset.eventId;
        const event = allEvents.find(e => e.id === eventId);
        
        if (period === 'all' || event.period === period) {
            marker.classList.remove('hidden');
            marker.style.display = 'block';
            // Animate in
            setTimeout(() => {
                marker.style.opacity = '1';
                marker.style.transform = 'scale(1)';
            }, Math.random() * 200);
        } else {
            marker.classList.add('hidden');
            marker.style.display = 'none';
        }
    });
    
    // Update timeline position based on period
    updateTimelineForPeriod(period);
}

function updateTimelineForPeriod(period) {
    const periodMap = {
        'ancient': 25,
        'medieval': 65,
        'modern': 90,
        'all': 100
    };
    
    const value = periodMap[period] || 100;
    const timelineRange = document.getElementById('timelineRange');
    if (timelineRange) {
        timelineRange.value = value;
    }
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const query = searchInput.value.toLowerCase().trim();
    console.log('Performing search:', query);
    
    if (!query) {
        resetView();
        return;
    }
    
    const matchingEvents = allEvents.filter(event => 
        event.name.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query)
    );
    
    console.log('Matching events:', matchingEvents.length);
    
    // Hide all markers first
    const markers = document.querySelectorAll('.marker');
    markers.forEach(marker => {
        marker.classList.add('hidden');
        marker.style.display = 'none';
    });
    
    // Show matching markers
    matchingEvents.forEach(event => {
        const marker = document.querySelector(`[data-event-id="${event.id}"]`);
        if (marker) {
            marker.classList.remove('hidden');
            marker.style.display = 'block';
            marker.style.opacity = '1';
            marker.style.transform = 'scale(1)';
            // Highlight with animation
            marker.style.animation = 'markerPulse 1s ease-in-out 3';
        }
    });
    
    // Show notification
    if (matchingEvents.length === 0) {
        showNotification('No events found for your search.');
    } else {
        showNotification(`Found ${matchingEvents.length} event(s)`);
    }
}

function resetView() {
    console.log('Resetting view...');
    currentFilter = 'all';
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Reset period buttons
    const periodButtons = document.querySelectorAll('.period-btn');
    periodButtons.forEach(btn => btn.classList.remove('active'));
    const allPeriodsBtn = document.querySelector('[data-period="all"]');
    if (allPeriodsBtn) {
        allPeriodsBtn.classList.add('active');
    }
    
    // Show all markers
    const markers = document.querySelectorAll('.marker');
    markers.forEach(marker => {
        marker.classList.remove('hidden');
        marker.style.display = 'block';
        marker.style.opacity = '1';
        marker.style.transform = 'scale(1)';
        marker.style.animation = '';
    });
    
    // Reset timeline
    const timelineRange = document.getElementById('timelineRange');
    if (timelineRange) {
        timelineRange.value = 100;
    }
    
    closeEventPanel();
}

function handleTimelineChange(e) {
    const value = parseInt(e.target.value);
    console.log('Timeline changed:', value);
    
    // Map timeline value to periods
    let period = 'all';
    if (value <= 33) period = 'ancient';
    else if (value <= 66) period = 'medieval';
    else if (value <= 90) period = 'modern';
    
    console.log('Timeline mapped to period:', period);
    
    // Update period filter
    if (period !== currentFilter) {
        filterByPeriod(period);
        
        // Update active button
        const periodButtons = document.querySelectorAll('.period-btn');
        periodButtons.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`[data-period="${period}"]`);
        if (activeBtn) activeBtn.classList.add('active');
    }
}

function showEventDetails(event) {
    console.log('Showing event details:', event.name);
    currentQuizEvent = event;
    selectedOption = null;
    
    const eventPanel = document.getElementById('eventPanel');
    if (!eventPanel) {
        console.error('Event panel not found');
        return;
    }
    
    // Populate panel content
    const eventTitle = document.getElementById('eventTitle');
    const eventYear = document.getElementById('eventYear');
    const eventLocation = document.getElementById('eventLocation');
    const eventDescription = document.getElementById('eventDescription');
    const eventSignificance = document.getElementById('eventSignificance');
    
    if (eventTitle) eventTitle.textContent = event.name;
    if (eventYear) eventYear.textContent = event.year || event.built;
    if (eventLocation) eventLocation.textContent = event.location;
    if (eventDescription) eventDescription.textContent = event.description;
    if (eventSignificance) eventSignificance.textContent = event.significance;
    
    // Handle image
    const imageContainer = document.getElementById('eventImage');
    if (imageContainer) {
        imageContainer.innerHTML = '';
        if (event.image) {
            const img = document.createElement('img');
            img.src = event.image;
            img.alt = event.name;
            img.onerror = () => {
                imageContainer.innerHTML = '<div class="no-image">No image available</div>';
            };
            imageContainer.appendChild(img);
        } else {
            imageContainer.innerHTML = '<div class="no-image">No image available</div>';
        }
    }
    
    // Setup quiz if available
    const eventQuiz = document.getElementById('eventQuiz');
    if (event.quiz && eventQuiz) {
        setupQuiz(event.quiz);
        eventQuiz.classList.remove('hidden');
    } else if (eventQuiz) {
        eventQuiz.classList.add('hidden');
    }
    
    // Show panel with animation
    eventPanel.classList.remove('hidden');
    setTimeout(() => {
        eventPanel.classList.add('visible');
    }, 10);
}

function setupQuiz(quiz) {
    console.log('Setting up quiz:', quiz.question);
    
    const quizQuestion = document.getElementById('quizQuestion');
    if (quizQuestion) {
        quizQuestion.textContent = quiz.question;
    }
    
    const optionsContainer = document.getElementById('quizOptions');
    if (!optionsContainer) return;
    
    optionsContainer.innerHTML = '';
    selectedOption = null;
    
    quiz.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        
        optionElement.addEventListener('click', () => selectQuizOption(optionElement, index));
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Setup submit button
    const submitBtn = document.getElementById('quizSubmit');
    if (submitBtn) {
        submitBtn.classList.add('hidden');
        submitBtn.onclick = () => submitQuizAnswer(quiz);
    }
    
    // Reset quiz state
    const quizResult = document.getElementById('quizResult');
    if (quizResult) {
        quizResult.classList.add('hidden');
    }
}

function selectQuizOption(optionElement, index) {
    console.log('Quiz option selected:', index);
    selectedOption = index;
    
    // Remove previous selections
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Select current option
    optionElement.classList.add('selected');
    
    // Show submit button
    const submitBtn = document.getElementById('quizSubmit');
    if (submitBtn) {
        submitBtn.classList.remove('hidden');
    }
}

function submitQuizAnswer(quiz) {
    console.log('Submitting quiz answer:', selectedOption);
    
    if (selectedOption === null) return;
    
    const isCorrect = selectedOption === quiz.answer;
    
    // Show result
    const resultElement = document.getElementById('quizResult');
    if (resultElement) {
        resultElement.classList.remove('hidden', 'correct', 'incorrect');
        resultElement.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        if (isCorrect) {
            resultElement.textContent = 'Correct! Well done!';
        } else {
            resultElement.textContent = `Incorrect. The correct answer is: ${quiz.options[quiz.answer]}`;
        }
    }
    
    // Style all options to show correct/incorrect
    document.querySelectorAll('.quiz-option').forEach((opt, index) => {
        opt.classList.remove('correct', 'incorrect');
        if (index === quiz.answer) {
            opt.classList.add('correct');
        } else if (index === selectedOption) {
            opt.classList.add('incorrect');
        }
        // Disable further clicking
        opt.style.pointerEvents = 'none';
    });
    
    // Hide submit button
    const submitBtn = document.getElementById('quizSubmit');
    if (submitBtn) {
        submitBtn.classList.add('hidden');
    }
}

function closeEventPanel() {
    console.log('Closing event panel');
    const eventPanel = document.getElementById('eventPanel');
    if (eventPanel) {
        eventPanel.classList.remove('visible');
        setTimeout(() => {
            eventPanel.classList.add('hidden');
        }, 300);
    }
}

function showNotification(message) {
    console.log('Showing notification:', message);
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--accent-orange);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 1001;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}
