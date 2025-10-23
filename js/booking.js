// Balloon booking functionality
(function() {
  let selectedDate = null;
  let adultsCount = 1;
  let childrenCount = 0;

  function initBookingPage() {
    createCalendar();
    initPassengerControls();
    initBookingForm();
    initPhoneNumberHandler();
  }

  function initPhoneNumberHandler() {
    const countrySelect = $('#country-code');
    const phoneInput = document.getElementById('phone');
    
    // Country code mapping for options without data-country attribute
    const countryMapping = {
      '+1': 'us', // Default to US for +1
      '+86': 'cn', '+91': 'in', '+81': 'jp', '+82': 'kr', '+65': 'sg',
      '+60': 'my', '+62': 'id', '+66': 'th', '+63': 'ph', '+84': 'vn',
      '+92': 'pk', '+880': 'bd', '+94': 'lk', '+95': 'mm', '+855': 'kh', '+856': 'la',
      '+971': 'ae', '+966': 'sa', '+972': 'il', '+98': 'ir', '+964': 'iq',
      '+962': 'jo', '+961': 'lb', '+963': 'sy', '+968': 'om', '+974': 'qa',
      '+965': 'kw', '+973': 'bh', '+20': 'eg', '+27': 'za', '+234': 'ng',
      '+254': 'ke', '+256': 'ug', '+255': 'tz', '+233': 'gh', '+212': 'ma',
      '+213': 'dz', '+216': 'tn', '+218': 'ly', '+251': 'et', '+260': 'zm',
      '+263': 'zw', '+61': 'au', '+64': 'nz', '+679': 'fj', '+55': 'br',
      '+54': 'ar', '+56': 'cl', '+57': 'co', '+51': 'pe', '+58': 've',
      '+593': 'ec', '+598': 'uy', '+595': 'py', '+591': 'bo', '+52': 'mx',
      '+7': 'ru', '+380': 'ua', '+375': 'by', '+374': 'am', '+995': 'ge', '+994': 'az'
    };

    // Comprehensive phone formatting patterns for all countries
    const phonePatterns = {
      // Europe
      'tr': { pattern: '0### ### ## ##', blocks: [4, 3, 2, 2] },           // Turkey
      'gb': { pattern: '##### ######', blocks: [5, 6] },                    // United Kingdom
      'de': { pattern: '### #### ####', blocks: [3, 4, 4] },               // Germany
      'fr': { pattern: '# ## ## ## ##', blocks: [1, 2, 2, 2, 2] },         // France
      'it': { pattern: '### ### ####', blocks: [3, 3, 4] },                // Italy
      'es': { pattern: '### ### ###', blocks: [3, 3, 3] },                 // Spain
      'nl': { pattern: '# #### ####', blocks: [1, 4, 4] },                 // Netherlands
      'be': { pattern: '### ## ## ##', blocks: [3, 2, 2, 2] },             // Belgium
      'ch': { pattern: '## ### ## ##', blocks: [2, 3, 2, 2] },             // Switzerland
      'at': { pattern: '### #### ####', blocks: [3, 4, 4] },               // Austria
      'se': { pattern: '## ### ## ##', blocks: [2, 3, 2, 2] },             // Sweden
      'no': { pattern: '### ## ###', blocks: [3, 2, 3] },                  // Norway
      'dk': { pattern: '## ## ## ##', blocks: [2, 2, 2, 2] },              // Denmark
      'fi': { pattern: '## ### ####', blocks: [2, 3, 4] },                 // Finland
      'gr': { pattern: '### ### ####', blocks: [3, 3, 4] },                // Greece
      'pt': { pattern: '### ### ###', blocks: [3, 3, 3] },                 // Portugal
      'ie': { pattern: '## ### ####', blocks: [2, 3, 4] },                 // Ireland
      'pl': { pattern: '### ### ###', blocks: [3, 3, 3] },                 // Poland
      'cz': { pattern: '### ### ###', blocks: [3, 3, 3] },                 // Czech Republic
      'hu': { pattern: '## ### ####', blocks: [2, 3, 4] },                 // Hungary
      'ro': { pattern: '### ### ###', blocks: [3, 3, 3] },                 // Romania
      'bg': { pattern: '### ### ###', blocks: [3, 3, 3] },                 // Bulgaria
      'hr': { pattern: '## ### ####', blocks: [2, 3, 4] },                 // Croatia
      'si': { pattern: '## ### ###', blocks: [2, 3, 3] },                  // Slovenia
      'sk': { pattern: '### ### ###', blocks: [3, 3, 3] },                 // Slovakia
      'lt': { pattern: '### #####', blocks: [3, 5] },                      // Lithuania
      'lv': { pattern: '#### ####', blocks: [4, 4] },                      // Latvia
      'ee': { pattern: '#### ####', blocks: [4, 4] },                      // Estonia
      'is': { pattern: '### ####', blocks: [3, 4] },                       // Iceland
      'mt': { pattern: '#### ####', blocks: [4, 4] },                      // Malta
      'cy': { pattern: '## ######', blocks: [2, 6] },                      // Cyprus
      'ru': { pattern: '### ### ## ##', blocks: [3, 3, 2, 2] },           // Russia
      'ua': { pattern: '## ### ## ##', blocks: [2, 3, 2, 2] },            // Ukraine
      'by': { pattern: '## ### ## ##', blocks: [2, 3, 2, 2] },            // Belarus

      // North America
      'us': { pattern: '(###) ###-####', blocks: [3, 3, 4] },              // United States
      'ca': { pattern: '(###) ###-####', blocks: [3, 3, 4] },              // Canada
      'mx': { pattern: '## #### ####', blocks: [2, 4, 4] },                // Mexico

      // Asia
      'cn': { pattern: '### #### ####', blocks: [3, 4, 4] },               // China
      'in': { pattern: '##### #####', blocks: [5, 5] },                    // India
      'jp': { pattern: '## #### ####', blocks: [2, 4, 4] },                // Japan
      'kr': { pattern: '## #### ####', blocks: [2, 4, 4] },                // South Korea
      'sg': { pattern: '#### ####', blocks: [4, 4] },                      // Singapore
      'my': { pattern: '## #### ####', blocks: [2, 4, 4] },                // Malaysia
      'id': { pattern: '### #### ####', blocks: [3, 4, 4] },               // Indonesia
      'th': { pattern: '## ### ####', blocks: [2, 3, 4] },                 // Thailand
      'ph': { pattern: '### ### ####', blocks: [3, 3, 4] },                // Philippines
      'vn': { pattern: '### ### ####', blocks: [3, 3, 4] },                // Vietnam
      'pk': { pattern: '### ### ####', blocks: [3, 3, 4] },                // Pakistan
      'bd': { pattern: '#### ######', blocks: [4, 6] },                    // Bangladesh
      'lk': { pattern: '## ### ####', blocks: [2, 3, 4] },                 // Sri Lanka
      'mm': { pattern: '# ### ####', blocks: [1, 3, 4] },                  // Myanmar
      'kh': { pattern: '## ### ###', blocks: [2, 3, 3] },                  // Cambodia
      'la': { pattern: '## ### ####', blocks: [2, 3, 4] },                 // Laos
      'am': { pattern: '## ######', blocks: [2, 6] },                      // Armenia
      'ge': { pattern: '### ### ###', blocks: [3, 3, 3] },                 // Georgia
      'az': { pattern: '## ### ## ##', blocks: [2, 3, 2, 2] },            // Azerbaijan

      // Middle East
      'ae': { pattern: '## ### ####', blocks: [2, 3, 4] },                 // UAE
      'sa': { pattern: '## ### ####', blocks: [2, 3, 4] },                 // Saudi Arabia
      'il': { pattern: '## ### ####', blocks: [2, 3, 4] },                 // Israel
      'ir': { pattern: '### ### ####', blocks: [3, 3, 4] },                // Iran
      'iq': { pattern: '### ### ####', blocks: [3, 3, 4] },                // Iraq
      'jo': { pattern: '# #### ####', blocks: [1, 4, 4] },                 // Jordan
      'lb': { pattern: '## ### ###', blocks: [2, 3, 3] },                  // Lebanon
      'sy': { pattern: '## #### ####', blocks: [2, 4, 4] },                // Syria
      'om': { pattern: '#### ####', blocks: [4, 4] },                      // Oman
      'qa': { pattern: '#### ####', blocks: [4, 4] },                      // Qatar
      'kw': { pattern: '#### ####', blocks: [4, 4] },                      // Kuwait
      'bh': { pattern: '#### ####', blocks: [4, 4] },                      // Bahrain

      // Africa
      'eg': { pattern: '### ### ####', blocks: [3, 3, 4] },                // Egypt
      'za': { pattern: '## ### ####', blocks: [2, 3, 4] },                 // South Africa
      'ng': { pattern: '### ### ####', blocks: [3, 3, 4] },                // Nigeria
      'ke': { pattern: '### ######', blocks: [3, 6] },                     // Kenya
      'ug': { pattern: '### ######', blocks: [3, 6] },                     // Uganda
      'tz': { pattern: '### ### ####', blocks: [3, 3, 4] },                // Tanzania
      'gh': { pattern: '### ### ####', blocks: [3, 3, 4] },                // Ghana
      'ma': { pattern: '### ######', blocks: [3, 6] },                     // Morocco
      'dz': { pattern: '### ## ## ##', blocks: [3, 2, 2, 2] },            // Algeria
      'tn': { pattern: '## ### ###', blocks: [2, 3, 3] },                  // Tunisia
      'ly': { pattern: '## ### ####', blocks: [2, 3, 4] },                 // Libya
      'et': { pattern: '## ### ####', blocks: [2, 3, 4] },                 // Ethiopia
      'zm': { pattern: '## ### ####', blocks: [2, 3, 4] },                 // Zambia
      'zw': { pattern: '## ### ####', blocks: [2, 3, 4] },                 // Zimbabwe

      // Oceania
      'au': { pattern: '### ### ###', blocks: [3, 3, 3] },                 // Australia
      'nz': { pattern: '## ### ####', blocks: [2, 3, 4] },                 // New Zealand
      'fj': { pattern: '### ####', blocks: [3, 4] },                       // Fiji

      // South America
      'br': { pattern: '## ##### ####', blocks: [2, 5, 4] },               // Brazil
      'ar': { pattern: '## #### ####', blocks: [2, 4, 4] },                // Argentina
      'cl': { pattern: '# #### ####', blocks: [1, 4, 4] },                 // Chile
      'co': { pattern: '### ### ####', blocks: [3, 3, 4] },                // Colombia
      'pe': { pattern: '### ### ###', blocks: [3, 3, 3] },                 // Peru
      've': { pattern: '### ### ####', blocks: [3, 3, 4] },                // Venezuela
      'ec': { pattern: '## ### ####', blocks: [2, 3, 4] },                 // Ecuador
      'uy': { pattern: '#### ####', blocks: [4, 4] },                      // Uruguay
      'py': { pattern: '### ### ###', blocks: [3, 3, 3] },                 // Paraguay
      'bo': { pattern: '# ### ####', blocks: [1, 3, 4] },                  // Bolivia

      // Default fallback for unsupported countries
      'default': { pattern: '################', blocks: [16] }
    };
    
    let cleaveInstance = null;
    
    if (countrySelect.length && phoneInput) {
      // Initialize Select2 with enhanced options
      countrySelect.select2({
        placeholder: 'Select your country',
        allowClear: false,
        width: 'resolve',
        dropdownAutoWidth: true,
        templateResult: function(option) {
          // For dropdown menu - show CDN flag + country name + code
          if (!option.id) return option.text;
          
          let countryCode = $(option.element).data('country');
          const text = option.text;
          const phoneCode = option.id;
          
          // If no data-country attribute, try to get from mapping
          if (!countryCode) {
            countryCode = countryMapping[phoneCode];
          }
          
          if (countryCode) {
            // Use Flagpedia CDN for high-quality flags
            const flagUrl = `https://flagcdn.com/24x18/${countryCode}.png`;
            return $(`<span style="display: flex; align-items: center; gap: 8px;">
              <img src="${flagUrl}" style="width: 24px; height: 18px; object-fit: cover; border-radius: 2px;" onerror="this.style.display='none';" />
              <span>${text}</span>
            </span>`);
          }
          
          return $('<span>' + option.text + '</span>');
        },
        templateSelection: function(option) {
          // For selected display - show only CDN flag and code
          if (!option.id) return option.text;
          
          let countryCode = $(option.element).data('country');
          const phoneCode = option.id;
          
          // If no data-country attribute, try to get from mapping
          if (!countryCode) {
            countryCode = countryMapping[phoneCode];
          }
          
          if (countryCode) {
            // Use Flagpedia CDN for selected display too
            const flagUrl = `https://flagcdn.com/20x15/${countryCode}.png`;
            return $(`<span style="display: flex; align-items: center; gap: 6px; font-weight: 500;">
              <img src="${flagUrl}" style="width: 20px; height: 15px; object-fit: cover; border-radius: 2px;" onerror="this.style.display='none';" />
              <span>${phoneCode}</span>
            </span>`);
          }
          
          return $('<span>' + option.text + '</span>');
        }
      });
      
      // Initialize Cleave.js for phone formatting
      function initPhoneFormatter(countryCode) {
        // Destroy existing instance
        if (cleaveInstance) {
          cleaveInstance.destroy();
        }
        
        const pattern = phonePatterns[countryCode] || phonePatterns['default'];
        
        cleaveInstance = new Cleave('#phone', {
          phone: true,
          phoneRegionCode: countryCode.toUpperCase(),
          delimiter: ' ',
          blocks: pattern.blocks,
          numericOnly: true
        });
      }

      // Update placeholder and format when country changes
      countrySelect.on('select2:select', function(e) {
        const selectedData = e.params.data;
        const selectedElement = $(selectedData.element);
        const placeholder = selectedData.element.getAttribute('data-placeholder');
        const phoneCode = selectedData.id;
        
        if (placeholder && phoneInput) {
          phoneInput.placeholder = placeholder;
        }
        
        // Get country code for formatting
        let countryCode = $(selectedData.element).data('country');
        if (!countryCode) {
          countryCode = countryMapping[phoneCode];
        }
        
        if (countryCode) {
          initPhoneFormatter(countryCode);
        }
      });
      
      // Set initial placeholder and formatter (Turkey as default)
      const initialOption = countrySelect.find('option:first');
      if (initialOption.length) {
        const initialPlaceholder = initialOption.attr('data-placeholder');
        if (initialPlaceholder && phoneInput) {
          phoneInput.placeholder = initialPlaceholder;
        }
        
        // Initialize with Turkey format
        const initialCountryCode = initialOption.data('country') || 'tr';
        initPhoneFormatter(initialCountryCode);
      }
    }
  }

  function createCalendar() {
    const calendarContainer = document.getElementById('flight-calendar');
    if (!calendarContainer) return;

    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    // Create calendar HTML
    const calendar = document.createElement('div');
    calendar.className = 'calendar';
    
    // Calendar header
    const header = document.createElement('div');
    header.className = 'flex items-center justify-between mb-4';
    header.innerHTML = `
      <button id="prev-month" class="p-2 hover:bg-gray-100 rounded">&lt;</button>
      <h4 id="calendar-month" class="font-semibold"></h4>
      <button id="next-month" class="p-2 hover:bg-gray-100 rounded">&gt;</button>
    `;
    calendar.appendChild(header);

    // Days grid
    const daysGrid = document.createElement('div');
    daysGrid.id = 'calendar-days';
    daysGrid.className = 'grid grid-cols-7 gap-1';
    calendar.appendChild(daysGrid);

    calendarContainer.appendChild(calendar);

    // Initialize calendar with current month
    renderCalendar(currentYear, currentMonth);

    // Event listeners for month navigation
    document.getElementById('prev-month').addEventListener('click', () => {
      const monthEl = document.getElementById('calendar-month');
      const [monthName, year] = monthEl.textContent.split(' ');
      const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth();
      const newMonth = monthIndex === 0 ? 11 : monthIndex - 1;
      const newYear = monthIndex === 0 ? parseInt(year) - 1 : parseInt(year);
      if (newYear > today.getFullYear() || (newYear === today.getFullYear() && newMonth >= today.getMonth())) {
        renderCalendar(newYear, newMonth);
      }
    });

    document.getElementById('next-month').addEventListener('click', () => {
      const monthEl = document.getElementById('calendar-month');
      const [monthName, year] = monthEl.textContent.split(' ');
      const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth();
      const newMonth = monthIndex === 11 ? 0 : monthIndex + 1;
      const newYear = monthIndex === 11 ? parseInt(year) + 1 : parseInt(year);
      renderCalendar(newYear, newMonth);
    });
  }

  function renderCalendar(year, month) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    document.getElementById('calendar-month').textContent = `${monthNames[month]} ${year}`;
    
    const daysGrid = document.getElementById('calendar-days');
    daysGrid.innerHTML = '';

    // Day headers
    dayNames.forEach(day => {
      const dayHeader = document.createElement('div');
      dayHeader.className = 'text-center text-xs font-medium text-muted p-2';
      dayHeader.textContent = day;
      daysGrid.appendChild(dayHeader);
    });

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      const emptyDay = document.createElement('div');
      emptyDay.className = 'p-2';
      daysGrid.appendChild(emptyDay);
    }

    // Calendar days
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement('button');
      const currentDate = new Date(year, month, day);
      const isPast = currentDate < today.setHours(0, 0, 0, 0);
      
      dayElement.className = `p-2 text-center rounded ${
        isPast 
          ? 'text-gray-300 cursor-not-allowed' 
          : 'hover:bg-accent1 hover:text-white cursor-pointer'
      }`;
      dayElement.textContent = day;
      
      if (!isPast) {
        dayElement.addEventListener('click', () => selectDate(year, month, day));
      }

      daysGrid.appendChild(dayElement);
    }
  }

  function selectDate(year, month, day) {
    // Remove previous selection
    document.querySelectorAll('.calendar button').forEach(btn => {
      btn.classList.remove('bg-accent1', 'text-white');
    });

    // Add selection to clicked date
    event.target.classList.add('bg-accent1', 'text-white');
    
    selectedDate = new Date(year, month, day);
    updateSelectedDate();
  }

  function updateSelectedDate() {
    const selectedDateEl = document.getElementById('selected-date');
    if (selectedDate && selectedDateEl) {
      selectedDateEl.textContent = selectedDate.toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }
  }

  // Get maximum passengers based on flight type
  function getMaxPassengers() {
    const flightTypeInput = document.getElementById('flight-type');
    const flightType = flightTypeInput ? flightTypeInput.value : 'Standard Flight';
    
    if (flightType === 'Comfort Flight') {
      return 28;
    } else if (flightType === 'Private Flight') {
      return 20;
    }
    return 32; // Default for Standard Flight
  }

  function initPassengerControls() {
    // Adults controls
    document.getElementById('adults-plus')?.addEventListener('click', () => {
      if (adultsCount + childrenCount < getMaxPassengers()) {
        adultsCount++;
        updatePassengerCount();
      }
    });

    document.getElementById('adults-minus')?.addEventListener('click', () => {
      if (adultsCount > 1) {
        adultsCount--;
        updatePassengerCount();
      }
    });

    // Children controls
    document.getElementById('children-plus')?.addEventListener('click', () => {
      if (adultsCount + childrenCount < getMaxPassengers()) {
        childrenCount++;
        updatePassengerCount();
      }
    });

    document.getElementById('children-minus')?.addEventListener('click', () => {
      if (childrenCount > 0) {
        childrenCount--;
        updatePassengerCount();
      }
    });
  }

  function updatePassengerCount() {
    document.getElementById('adults-count').textContent = adultsCount;
    document.getElementById('children-count').textContent = childrenCount;
    
    // Enhanced passenger display
    const totalPassengersEl = document.getElementById('total-passengers');
    if (totalPassengersEl) {
      let displayText = '';
      if (adultsCount > 0) {
        displayText += `${adultsCount} Adult${adultsCount > 1 ? 's' : ''}`;
      }
      if (childrenCount > 0) {
        if (displayText) displayText += ', ';
        displayText += `${childrenCount} Child${childrenCount > 1 ? 'ren' : ''}`;
      }
      totalPassengersEl.textContent = displayText;
    }
    
  }

  function initBookingForm() {
    const form = document.getElementById('booking-form');
    if (!form) return;

    // Remove existing event listeners to prevent duplicate submissions
    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);

    // Add single event listener
    newForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Validate date selection
      if (!selectedDate) {
        Swal.fire({
          icon: 'warning',
          title: 'Date Required',
          text: 'Please select a date for your flight.',
          confirmButtonColor: '#DCA47C'
        });
        return;
      }

      // Get form data
      const formData = new FormData(newForm);
      const name = formData.get('name')?.trim();
      const email = formData.get('email')?.trim();
      const phone = formData.get('phone')?.trim();

      // Validate required fields
      if (!name) {
        Swal.fire({
          icon: 'warning',
          title: 'Name Required',
          text: 'Please enter your full name.',
          confirmButtonColor: '#DCA47C'
        }).then(() => {
          newForm.querySelector('#name').focus();
        });
        return;
      }

      if (!email) {
        Swal.fire({
          icon: 'warning',
          title: 'Email Required', 
          text: 'Please enter your email address.',
          confirmButtonColor: '#DCA47C'
        }).then(() => {
          newForm.querySelector('#email').focus();
        });
        return;
      }

      // Basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Email',
          text: 'Please enter a valid email address.',
          confirmButtonColor: '#DCA47C'
        }).then(() => {
          newForm.querySelector('#email').focus();
        });
        return;
      }

      // Get flight type from hidden input
      const flightTypeInput = document.getElementById('flight-type');
      const flightType = flightTypeInput ? flightTypeInput.value : 'Unknown Flight Type';

      // Set maximum passengers based on flight type
      let maxPassengers = 32; // Default for Standard Flight
      if (flightType === 'Comfort Flight') {
        maxPassengers = 28;
      } else if (flightType === 'Private Flight') {
        maxPassengers = 20;
      }

      // Validate total passengers
      const totalPassengers = adultsCount + childrenCount;
      if (totalPassengers > maxPassengers) {
        Swal.fire({
          icon: 'error',
          title: 'Too Many Passengers',
          text: `Maximum ${maxPassengers} passengers allowed for ${flightType}.`,
          confirmButtonColor: '#DCA47C'
        });
        return;
      }

      const bookingData = {
        flightType: flightType,
        date: selectedDate.toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        adults: adultsCount,
        children: childrenCount,
        name: name,
        email: email,
        phone: phone || 'Not provided'
      };

      // Debug: Log all booking data
      console.log('=== BOOKING REQUEST DEBUG ===');
      console.log('Flight Type:', bookingData.flightType);
      console.log('Selected Date:', bookingData.date);
      console.log('Adults Count:', bookingData.adults);
      console.log('Children Count:', bookingData.children);
      console.log('Customer Name:', bookingData.name);
      console.log('Customer Email:', bookingData.email);
      console.log('Customer Phone:', bookingData.phone);
      console.log('Total Passengers:', bookingData.adults + bookingData.children);
      console.log('==============================');
      
      // Show confirmation dialog with booking details
      const result = await Swal.fire({
        title: 'Confirm Booking Request',
        html: `
          <div class="text-left space-y-2">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold text-lg mb-3">Flight Details</h4>
              <p><strong>Flight:</strong> ${bookingData.flightType}</p>
              <p><strong>Date:</strong> ${bookingData.date}</p>
              <p><strong>Passengers:</strong> ${bookingData.adults} Adults${bookingData.children > 0 ? `, ${bookingData.children} Children` : ''}</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg mt-3">
              <h4 class="font-semibold text-lg mb-3">Contact Information</h4>
              <p><strong>Name:</strong> ${bookingData.name}</p>
              <p><strong>Email:</strong> ${bookingData.email}</p>
              <p><strong>Phone:</strong> ${bookingData.phone}</p>
            </div>
          </div>
        `,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#DCA47C',
        cancelButtonColor: '#6B7280',
        confirmButtonText: 'Send Request',
        cancelButtonText: 'Cancel',
        customClass: {
          htmlContainer: 'swal-html-container'
        }
      });

      if (!result.isConfirmed) {
        return;
      }
      
      // Create mailto link with all details
      const subject = encodeURIComponent(`Balloon Flight Booking Request - ${bookingData.flightType}`);
      const body = encodeURIComponent(`
Dear Capahenas Travel,

I would like to request a booking for a balloon flight with the following details:

FLIGHT INFORMATION:
- Flight Type: ${bookingData.flightType}
- Preferred Date: ${bookingData.date}
- Number of Adults: ${bookingData.adults}
- Number of Children: ${bookingData.children}
- Total Passengers: ${bookingData.adults + bookingData.children}

CONTACT INFORMATION:
- Full Name: ${bookingData.name}
- Email: ${bookingData.email}
- Phone: ${bookingData.phone}

Please send me more information about availability, pricing, and booking confirmation for this flight.

Thank you!

Best regards,
${bookingData.name}
      `);
      
      // Open email client
      window.location.href = `mailto:info@capahenastravel.com?subject=${subject}&body=${body}`;
      
      // Show success message
      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'Request Prepared!',
          text: 'Your booking request has been prepared! Please send the email that just opened to complete your request.',
          confirmButtonColor: '#DCA47C',
          timer: 5000,
          timerProgressBar: true
        });
      }, 500);
    });
  }

  // Initialize when DOM is loaded or when called by component system
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBookingPage);
  } else {
    initBookingPage();
  }

  // Make it available globally for component reinitialization
  window.initBookingPage = initBookingPage;
})();