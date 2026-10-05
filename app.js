/**
 * بيتزا هَـوّاس - المكلا | Hawas Pizza Mukalla
 * Comprehensive Interactive Web Application Logic
 * Vanilla JavaScript (ES6+)
 */

'use strict';

// ========================================================
// MENU DATABASE (قائمة الأطباق والأصناف المعتمدة)
// ========================================================
const HAWAS_MENU = [
  // --- بيتزا هواس المميزة ---
  {
    id: 'pizza-supreme',
    name: 'بيتزا هَـوّاس سوبريم الخاصة',
    category: 'special-pizza',
    desc: 'خلطة هواس السرية، جبنة موزاريلا فاخرة، شرائح بيبروني، دجاج متبل، فطر طازج، فلفل ألوان وزيتون أسود.',
    basePrice: 5500,
    sizes: [
      { id: 's', name: 'صغير (25 سم)', diameter: 'فردي مشبع', price: 4200 },
      { id: 'm', name: 'وسط (30 سم)', diameter: '2 - 3 أشخاص', price: 6200 },
      { id: 'l', name: 'عائلي كبير (38 سم)', diameter: '4 - 5 أشخاص', price: 8500 }
    ],
    image: 'assets/hero_pizza.jpg',
    tag: 'الأكثر طلباً 🔥',
    tagClass: 'tag-hot',
    canCustomize: true
  },
  {
    id: 'pizza-ranch',
    name: 'بيتزا تشيكن رانش',
    category: 'special-pizza',
    desc: 'صدور دجاج مشوية مع صوص الرانش الغني، فطر طازج، جبنة موزاريلا ذائبة وبصل مقرمش.',
    basePrice: 5200,
    sizes: [
      { id: 's', name: 'صغير (25 سم)', diameter: 'فردي', price: 4000 },
      { id: 'm', name: 'وسط (30 سم)', diameter: '2 - 3 أشخاص', price: 5900 },
      { id: 'l', name: 'عائلي كبير (38 سم)', diameter: '4 - 5 أشخاص', price: 8200 }
    ],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&auto=format&fit=crop&q=80',
    tag: 'مميز ⭐',
    tagClass: 'tag-best',
    canCustomize: true
  },
  {
    id: 'pizza-bbq',
    name: 'بيتزا باربكيو دجاج مدخن',
    category: 'special-pizza',
    desc: 'قطع دجاج متبلة بصوص الباربكيو المدخن، جبنة شيدر وموزاريلا، وحلقات بصل أحمر.',
    basePrice: 5000,
    sizes: [
      { id: 's', name: 'صغير (25 سم)', diameter: 'فردي', price: 3900 },
      { id: 'm', name: 'وسط (30 سم)', diameter: '2 - 3 أشخاص', price: 5800 },
      { id: 'l', name: 'عائلي كبير (38 سم)', diameter: '4 - 5 أشخاص', price: 7900 }
    ],
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=700&auto=format&fit=crop&q=80',
    tag: 'نكهة خاصة',
    tagClass: 'tag-best',
    canCustomize: true
  },
  {
    id: 'pizza-meat-shawarma',
    name: 'بيتزا شاورما لحم حضرمية',
    category: 'special-pizza',
    desc: 'شرائح لحم بتتبيلة الشاورما المميزة، طماطم، صوص طحينة خفيف، وجبنة موزاريلا ساخنة.',
    basePrice: 5800,
    sizes: [
      { id: 's', name: 'صغير (25 سم)', diameter: 'فردي', price: 4500 },
      { id: 'm', name: 'وسط (30 سم)', diameter: '2 - 3 أشخاص', price: 6500 },
      { id: 'l', name: 'عائلي كبير (38 سم)', diameter: '4 - 5 أشخاص', price: 8900 }
    ],
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700&auto=format&fit=crop&q=80',
    tag: 'جديد 🆕',
    tagClass: 'tag-hot',
    canCustomize: true
  },

  // --- البيتزا الكلاسيكية ---
  {
    id: 'pizza-pepperoni',
    name: 'بيتزا بيبروني تريبل',
    category: 'classic-pizza',
    desc: 'طبقات وفيرة من شرائح البيبروني البقري المقرمش مع جبنة الموزاريلا وصلصة الطماطم الإيطالية.',
    basePrice: 4800,
    sizes: [
      { id: 's', name: 'صغير (25 سم)', diameter: 'فردي', price: 3800 },
      { id: 'm', name: 'وسط (30 سم)', diameter: '2 - 3 أشخاص', price: 5500 },
      { id: 'l', name: 'عائلي كبير (38 سم)', diameter: '4 - 5 أشخاص', price: 7600 }
    ],
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=700&auto=format&fit=crop&q=80',
    tag: 'كلاسيك مفضل',
    tagClass: 'tag-best',
    canCustomize: true
  },
  {
    id: 'pizza-margherita',
    name: 'بيتزا مارجريتا الأصلية',
    category: 'classic-pizza',
    desc: 'صلصة طماطم سان مارزانو، جبنة موزاريلا إيطالية نقية 100%، ريحان طازج وزيت زيتون بكر.',
    basePrice: 3800,
    sizes: [
      { id: 's', name: 'صغير (25 سم)', diameter: 'فردي', price: 3200 },
      { id: 'm', name: 'وسط (30 سم)', diameter: '2 - 3 أشخاص', price: 4600 },
      { id: 'l', name: 'عائلي كبير (38 سم)', diameter: '4 - 5 أشخاص', price: 6500 }
    ],
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=700&auto=format&fit=crop&q=80',
    tag: 'نباتي 🌿',
    tagClass: 'tag-best',
    canCustomize: true
  },
  {
    id: 'pizza-veggie',
    name: 'بيتزا خضار المزرعة',
    category: 'classic-pizza',
    desc: 'فلفل رومي، فطر طازج، بصل، طماطم، ذرة حلوة، زيتون أسود وموزاريلا ذائبة.',
    basePrice: 4200,
    sizes: [
      { id: 's', name: 'صغير (25 سم)', diameter: 'فردي', price: 3400 },
      { id: 'm', name: 'وسط (30 سم)', diameter: '2 - 3 أشخاص', price: 4900 },
      { id: 'l', name: 'عائلي كبير (38 سم)', diameter: '4 - 5 أشخاص', price: 6900 }
    ],
    image: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=700&auto=format&fit=crop&q=80',
    tag: 'خفيف وشهي',
    tagClass: 'tag-best',
    canCustomize: true
  },
  {
    id: 'pizza-four-cheese',
    name: 'بيتزا الأجبان الأربعة (كواترو)',
    category: 'classic-pizza',
    desc: 'مزيج فاخر من جبن الموزاريلا، شيدر معتق، جودة بارميزان مع رشة أوريجانو عطرة.',
    basePrice: 5200,
    sizes: [
      { id: 's', name: 'صغير (25 سم)', diameter: 'فردي', price: 4200 },
      { id: 'm', name: 'وسط (30 سم)', diameter: '2 - 3 أشخاص', price: 5900 },
      { id: 'l', name: 'عائلي كبير (38 سم)', diameter: '4 - 5 أشخاص', price: 8200 }
    ],
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?w=700&auto=format&fit=crop&q=80',
    tag: 'عشاق الجبن 🧀',
    tagClass: 'tag-hot',
    canCustomize: true
  },

  // --- برجر وساندوتشات ---
  {
    id: 'burger-crispy-double',
    name: 'برجر كرسبي دبل تشيكن',
    category: 'burgers',
    desc: 'قطعتان من صدور الدجاج المقرمش الذهبي، شيدر ذائبة، خس طازج وصوص هواس الخاص في خبز سمسم.',
    basePrice: 4200,
    sizes: null,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&auto=format&fit=crop&q=80',
    tag: 'وجبة مميزة 🍔',
    tagClass: 'tag-hot',
    canCustomize: false
  },
  {
    id: 'burger-angus-beef',
    name: 'برجر لحم أنجوس هواس',
    category: 'burgers',
    desc: 'شريحة لحم بقري أنجوس مشوية على اللهب، صوص سموكي، بصل مكرمل وجبن شيدر أمريكي.',
    basePrice: 4800,
    sizes: null,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=700&auto=format&fit=crop&q=80',
    tag: 'لحم فاخر',
    tagClass: 'tag-best',
    canCustomize: false
  },
  {
    id: 'sandwich-fajita',
    name: 'ساندوتش فاهيتا دجاج مكسيكي',
    category: 'burgers',
    desc: 'دجاج متبل مع الفلفل والبصل المكرمل وصوص الرانش في خبز باجيت محمص مع الجبن.',
    basePrice: 3500,
    sizes: null,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=700&auto=format&fit=crop&q=80',
    tag: 'سبايسي 🌶️',
    tagClass: 'tag-hot',
    canCustomize: false
  },

  // --- مقبلات وجوانب ---
  {
    id: 'app-mozzarella-sticks',
    name: 'أصابع جبنة موزاريلا مقرمشة (5 قطع)',
    category: 'appetizers',
    desc: 'أصابع موزاريلا ذهبية مقرمشة تمتد عند القضم، تقدم مع صوص المارينارا الخاص.',
    basePrice: 2400,
    sizes: null,
    image: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=700&auto=format&fit=crop&q=80',
    tag: 'مقرمش وذائب 🧀',
    tagClass: 'tag-hot',
    canCustomize: false
  },
  {
    id: 'app-chicken-wings',
    name: 'أجنحة دجاج مقرمشة بصوص الباربكيو (6 قطع)',
    category: 'appetizers',
    desc: 'أجنحة دجاج مقلية بتتبيلة خاصة ومغمسة بصوص الباربكيو المدخن أو الحار حسب رغبتك.',
    basePrice: 3200,
    sizes: null,
    image: 'https://images.unsplash.com/photo-1527477378724-4f1073169727?w=700&auto=format&fit=crop&q=80',
    tag: 'نكهة مدخنة 🔥',
    tagClass: 'tag-best',
    canCustomize: false
  },
  {
    id: 'app-french-fries-cheese',
    name: 'بطاطس مقلية بالجبنة السائلة والهلابينو',
    category: 'appetizers',
    desc: 'بطاطس ذهبية ساخنة مغطاة بصوص جبن الشيدر الغني وحلقات فلفل هلابينو.',
    basePrice: 2200,
    sizes: null,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?w=700&auto=format&fit=crop&q=80',
    tag: 'مقبلات شهية',
    tagClass: 'tag-best',
    canCustomize: false
  },

  // --- مشروبات وصوصات ---
  {
    id: 'drink-pepsi',
    name: 'بيبسي مثلج بارد (علبة)',
    category: 'drinks',
    desc: 'مشروب غازي منعش يقدم بارداً ومثلجاً مع وجبتك.',
    basePrice: 700,
    sizes: null,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=700&auto=format&fit=crop&q=80',
    tag: 'منعش ❄️',
    tagClass: 'tag-best',
    canCustomize: false
  },
  {
    id: 'drink-mojito',
    name: 'موخيتو ليمون ونعناع منعش',
    category: 'drinks',
    desc: 'عصير ليمون طازج مع أوراق النعناع والصودا وقطع الثلج المنعشة في جو المكلا.',
    basePrice: 1200,
    sizes: null,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=700&auto=format&fit=crop&q=80',
    tag: 'انتعاش خالص 🍃',
    tagClass: 'tag-best',
    canCustomize: false
  },
  {
    id: 'sauce-ranch-pot',
    name: 'صوص رانش إضافي (علبة)',
    category: 'drinks',
    desc: 'صوص الرانش الكريمي الشهير للتغميس والاستمتاع بأطراف البيتزا والبطاطس.',
    basePrice: 400,
    sizes: null,
    image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=700&auto=format&fit=crop&q=80',
    tag: 'تغميس',
    tagClass: 'tag-best',
    canCustomize: false
  }
];

// District Names Mapping in Arabic
const DISTRICT_NAMES = {
  sharj: 'حي الشرج',
  dees: 'حي الديس',
  old_mukalla: 'المكلا القديمة',
  fowa_masaken: 'فُوّه - المساكن',
  fowa_mottadarireen: 'فُوّه - المتضررين',
  fowa_old: 'فُوّه القديمة',
  ghelelah: 'حي الغليلة',
  forty_flats: 'حي 40 شقة',
  khalaf: 'منطقة خلف',
  boyesh: 'بويش والرواد',
  rokob: 'روكب',
  'joul_mas-ha': 'جول مسحة'
};

// ========================================================
// CORE APPLICATION STATE & CONTROLLER
// ========================================================
class HawasApp {
  constructor() {
    this.cart = this.loadCart();
    this.currentCustomizerItem = null;
    this.selectedSize = null;
    this.customizerQty = 1;
    this.activeOrder = this.loadActiveOrder();
    this.orderHistory = this.loadOrderHistory();
    this.orderTrackingInterval = null;

    this.initElements();
    this.bindEvents();
    this.renderMenu('all');
    this.updateCartUI();
    this.checkActiveOrderTracker();
  }

  // Load state from localStorage
  loadCart() {
    try {
      const data = localStorage.getItem('hawas_cart');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('Could not read cart from localStorage', e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('hawas_cart', JSON.stringify(this.cart));
    } catch (e) {
      console.warn('Could not save cart', e);
    }
  }

  loadActiveOrder() {
    try {
      const data = localStorage.getItem('hawas_active_order');
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  saveActiveOrder(order) {
    this.activeOrder = order;
    if (order) {
      localStorage.setItem('hawas_active_order', JSON.stringify(order));
    } else {
      localStorage.removeItem('hawas_active_order');
    }
    this.checkActiveOrderTracker();
  }

  loadOrderHistory() {
    try {
      const data = localStorage.getItem('hawas_order_history');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  saveOrderHistory(history) {
    this.orderHistory = history;
    try {
      localStorage.setItem('hawas_order_history', JSON.stringify(history));
    } catch (e) {}
  }

  // DOM Elements mapping
  initElements() {
    this.menuGrid = document.getElementById('menuGrid');
    this.emptyMenuState = document.getElementById('emptyMenuState');
    this.menuSearchInput = document.getElementById('menuSearchInput');
    this.clearSearchBtn = document.getElementById('clearSearchBtn');
    this.categoryTabs = document.getElementById('categoryTabs');
    this.btnResetSearch = document.getElementById('btnResetSearch');

    // Header buttons
    this.cartCount = document.getElementById('cartCount');
    this.cartTotalPreview = document.getElementById('cartTotalPreview');
    this.btnOpenCart = document.getElementById('btnOpenCart');
    this.btnOpenTracker = document.getElementById('btnOpenTracker');
    this.trackerPulse = document.getElementById('trackerPulse');
    this.mobileToggle = document.getElementById('mobileToggle');
    this.navMenu = document.getElementById('navMenu');
    this.btnHeroTrack = document.getElementById('btnHeroTrack');

    // Customizer Modal
    this.customizerBackdrop = document.getElementById('customizerBackdrop');
    this.closeCustomizerBtn = document.getElementById('closeCustomizerBtn');
    this.customizerItemName = document.getElementById('customizerItemName');
    this.customizerItemTag = document.getElementById('customizerItemTag');
    this.customizerItemImg = document.getElementById('customizerItemImg');
    this.customizerItemDesc = document.getElementById('customizerItemDesc');
    this.sizeOptionsGrid = document.getElementById('sizeOptionsGrid');
    this.crustSelectionSection = document.getElementById('crustSelectionSection');
    this.extrasSection = document.getElementById('extrasSection');
    this.customizerNotes = document.getElementById('customizerNotes');
    this.customizerQtyEl = document.getElementById('customizerQty');
    this.btnQtyMinus = document.getElementById('btnQtyMinus');
    this.btnQtyPlus = document.getElementById('btnQtyPlus');
    this.customizerLiveTotal = document.getElementById('customizerLiveTotal');
    this.btnConfirmAddToCart = document.getElementById('btnConfirmAddToCart');

    // Cart Drawer
    this.cartBackdrop = document.getElementById('cartBackdrop');
    this.closeCartBtn = document.getElementById('closeCartBtn');
    this.cartItemsList = document.getElementById('cartItemsList');
    this.emptyCartState = document.getElementById('emptyCartState');
    this.cartDrawerFooter = document.getElementById('cartDrawerFooter');
    this.cartSubtotal = document.getElementById('cartSubtotal');
    this.cartDeliveryFee = document.getElementById('cartDeliveryFee');
    this.cartGrandTotal = document.getElementById('cartGrandTotal');
    this.cartItemsCountText = document.getElementById('cartItemsCountText');
    this.btnGoToCheckout = document.getElementById('btnGoToCheckout');

    // Checkout Modal
    this.checkoutBackdrop = document.getElementById('checkoutBackdrop');
    this.closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
    this.checkoutForm = document.getElementById('checkoutForm');
    this.labelDelivery = document.getElementById('labelDelivery');
    this.labelPickup = document.getElementById('labelPickup');
    this.deliveryFieldsGroup = document.getElementById('deliveryFieldsGroup');
    this.custDistrict = document.getElementById('custDistrict');
    this.custAddress = document.getElementById('custAddress');
    this.custName = document.getElementById('custName');
    this.custPhone = document.getElementById('custPhone');
    this.bankInfoBox = document.getElementById('bankInfoBox');
    this.bankNameTitle = document.getElementById('bankNameTitle');
    this.bankAccountNumber = document.getElementById('bankAccountNumber');
    this.btnCopyAccount = document.getElementById('btnCopyAccount');
    this.finalSubtotal = document.getElementById('finalSubtotal');
    this.finalDelivery = document.getElementById('finalDelivery');
    this.finalGrandTotal = document.getElementById('finalGrandTotal');
    this.checkSendWhatsapp = document.getElementById('checkSendWhatsapp');

    // Tracker Modal
    this.trackerBackdrop = document.getElementById('trackerBackdrop');
    this.closeTrackerBtn = document.getElementById('closeTrackerBtn');
    this.trackerOrderCode = document.getElementById('trackerOrderCode');
    this.trackerEtaTimer = document.getElementById('trackerEtaTimer');
    this.trackerCurrentIcon = document.getElementById('trackerCurrentIcon');
    this.trackerCurrentTitle = document.getElementById('trackerCurrentTitle');
    this.trackerCurrentDetail = document.getElementById('trackerCurrentDetail');
    this.trackerItemsList = document.getElementById('trackerItemsList');
    this.trackerAddressText = document.getElementById('trackerAddressText');
    this.trackerTotalText = document.getElementById('trackerTotalText');
    this.trackerPaymentText = document.getElementById('trackerPaymentText');
    this.step3Title = document.getElementById('step3Title');
    this.step3Sub = document.getElementById('step3Sub');
    this.btnSimulateNextStep = document.getElementById('btnSimulateNextStep');
    this.btnResetSimulation = document.getElementById('btnResetSimulation');
    this.btnTrackerWhatsapp = document.getElementById('btnTrackerWhatsapp');

    // History Modal
    this.historyBackdrop = document.getElementById('historyBackdrop');
    this.closeHistoryBtn = document.getElementById('closeHistoryBtn');
    this.historyModalBody = document.getElementById('historyModalBody');
  }

  // Event bindings
  bindEvents() {
    // Header & Mobile Nav
    this.mobileToggle.addEventListener('click', () => {
      this.navMenu.classList.toggle('open');
    });

    this.navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        this.navMenu.classList.remove('open');
        this.navMenu.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });

    // Cart button
    this.btnOpenCart.addEventListener('click', () => this.openCart());
    this.closeCartBtn.addEventListener('click', () => this.closeCart());
    this.cartBackdrop.addEventListener('click', (e) => {
      if (e.target === this.cartBackdrop) this.closeCart();
    });

    // Tracker buttons
    this.btnOpenTracker.addEventListener('click', () => this.openTracker());
    if (this.btnHeroTrack) {
      this.btnHeroTrack.addEventListener('click', () => this.openTracker());
    }
    this.closeTrackerBtn.addEventListener('click', () => this.closeTracker());
    this.trackerBackdrop.addEventListener('click', (e) => {
      if (e.target === this.trackerBackdrop) this.closeTracker();
    });

    // Category Tabs
    this.categoryTabs.querySelectorAll('.cat-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.categoryTabs.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const cat = tab.getAttribute('data-category');
        this.renderMenu(cat, this.menuSearchInput.value.trim());
      });
    });

    // Search bar
    this.menuSearchInput.addEventListener('input', () => {
      const q = this.menuSearchInput.value.trim();
      this.clearSearchBtn.style.display = q ? 'block' : 'none';
      const activeCat = this.categoryTabs.querySelector('.cat-tab.active')?.getAttribute('data-category') || 'all';
      this.renderMenu(activeCat, q);
    });

    this.clearSearchBtn.addEventListener('click', () => {
      this.menuSearchInput.value = '';
      this.clearSearchBtn.style.display = 'none';
      const activeCat = this.categoryTabs.querySelector('.cat-tab.active')?.getAttribute('data-category') || 'all';
      this.renderMenu(activeCat);
    });

    this.btnResetSearch.addEventListener('click', () => {
      this.menuSearchInput.value = '';
      this.clearSearchBtn.style.display = 'none';
      this.categoryTabs.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      this.categoryTabs.querySelector('[data-category="all"]').classList.add('active');
      this.renderMenu('all');
    });

    // Customizer Modal
    this.closeCustomizerBtn.addEventListener('click', () => this.closeCustomizer());
    this.customizerBackdrop.addEventListener('click', (e) => {
      if (e.target === this.customizerBackdrop) this.closeCustomizer();
    });

    this.btnQtyMinus.addEventListener('click', () => {
      if (this.customizerQty > 1) {
        this.customizerQty--;
        this.customizerQtyEl.textContent = this.customizerQty;
        this.updateCustomizerLivePrice();
      }
    });

    this.btnQtyPlus.addEventListener('click', () => {
      if (this.customizerQty < 20) {
        this.customizerQty++;
        this.customizerQtyEl.textContent = this.customizerQty;
        this.updateCustomizerLivePrice();
      }
    });

    // Listen to changes in crust or extras in the customizer
    document.querySelectorAll('input[name="pizzaCrust"], input[name="extraTopping"]').forEach(el => {
      el.addEventListener('change', () => this.updateCustomizerLivePrice());
    });

    this.btnConfirmAddToCart.addEventListener('click', () => this.confirmCustomizerAddToCart());

    // Checkout Modal
    this.btnGoToCheckout.addEventListener('click', () => {
      this.closeCart();
      this.openCheckout();
    });

    this.closeCheckoutBtn.addEventListener('click', () => this.closeCheckout());
    this.checkoutBackdrop.addEventListener('click', (e) => {
      if (e.target === this.checkoutBackdrop) this.closeCheckout();
    });

    // Order fulfillment toggle
    const orderTypeRadios = document.querySelectorAll('input[name="orderType"]');
    orderTypeRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        if (radio.value === 'delivery') {
          this.labelDelivery.classList.add('active');
          this.labelPickup.classList.remove('active');
          this.deliveryFieldsGroup.style.display = 'block';
          this.custDistrict.setAttribute('required', 'required');
          this.custAddress.setAttribute('required', 'required');
        } else {
          this.labelPickup.classList.add('active');
          this.labelDelivery.classList.remove('active');
          this.deliveryFieldsGroup.style.display = 'none';
          this.custDistrict.removeAttribute('required');
          this.custAddress.removeAttribute('required');
        }
        this.updateCheckoutBill();
      });
    });

    // District change
    this.custDistrict.addEventListener('change', () => {
      this.updateCheckoutBill();
    });

    // Payment methods
    const payMethodRadios = document.querySelectorAll('input[name="payMethod"]');
    payMethodRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        document.querySelectorAll('.pay-method-card').forEach(c => c.classList.remove('active'));
        radio.closest('.pay-method-card').classList.add('active');

        if (radio.value === 'kuraimi') {
          this.bankInfoBox.style.display = 'block';
          this.bankNameTitle.textContent = 'بنك الكريمي المميز';
          this.bankAccountNumber.textContent = '3008921455';
        } else if (radio.value === 'qutaibi') {
          this.bankInfoBox.style.display = 'block';
          this.bankNameTitle.textContent = 'بنك القطيبي الإسلامي';
          this.bankAccountNumber.textContent = '1229048110';
        } else {
          this.bankInfoBox.style.display = 'none';
        }
      });
    });

    // Copy Account Button
    this.btnCopyAccount.addEventListener('click', () => {
      const acc = this.bankAccountNumber.textContent;
      navigator.clipboard.writeText(acc).then(() => {
        this.showToast('تم نسخ رقم الحساب بنجاح! يمكنك التحويل الآن 📋', 'success');
      }).catch(() => {
        this.showToast('رقم الحساب: ' + acc);
      });
    });

    // Checkout form submit
    this.checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleProcessOrder();
    });

    // Tracker simulation controls
    this.btnSimulateNextStep.addEventListener('click', () => this.simulateNextOrderStep());
    this.btnResetSimulation.addEventListener('click', () => this.resetOrderSimulation());

    // History Modal
    this.closeHistoryBtn.addEventListener('click', () => this.closeHistoryModal());
    this.historyBackdrop.addEventListener('click', (e) => {
      if (e.target === this.historyBackdrop) this.closeHistoryModal();
    });
  }

  // ========================================================
  // MENU RENDERING & FILTERING
  // ========================================================
  renderMenu(category = 'all', searchQuery = '') {
    const query = searchQuery.toLowerCase().trim();
    let filtered = HAWAS_MENU;

    if (category !== 'all') {
      filtered = filtered.filter(item => item.category === category);
    }

    if (query) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.desc.toLowerCase().includes(query)
      );
    }

    if (filtered.length === 0) {
      this.menuGrid.innerHTML = '';
      this.emptyMenuState.style.display = 'block';
      return;
    }

    this.emptyMenuState.style.display = 'none';
    this.menuGrid.innerHTML = filtered.map(item => this.createFoodCardHtml(item)).join('');
  }

  createFoodCardHtml(item) {
    const priceText = item.sizes 
      ? `يبدأ من ${item.sizes[0].price.toLocaleString('ar-YE')} <small>ر.ي</small>`
      : `${item.basePrice.toLocaleString('ar-YE')} <small>ر.ي</small>`;

    const actionText = item.canCustomize ? 'تخصيص وطلب 🍕' : 'إضافة للسلة 🛒';
    const actionClick = item.canCustomize 
      ? `hawasApp.openCustomizer('${item.id}')`
      : `hawasApp.quickAddToCart('${item.id}')`;

    return `
      <div class="food-card" data-id="${item.id}">
        <div class="card-img-wrap">
          <img src="${item.image}" alt="${item.name}" class="card-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80'">
          ${item.tag ? `<span class="card-tag ${item.tagClass}">${item.tag}</span>` : ''}
        </div>
        <div class="card-body">
          <h3 class="card-title">${item.name}</h3>
          <p class="card-desc">${item.desc}</p>
          <div class="card-footer">
            <div class="card-price-wrap">
              <span class="price-label">السعر</span>
              <span class="card-price">${priceText}</span>
            </div>
            <button type="button" class="btn-card-action" onclick="${actionClick}">
              <span>${actionText}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // Quick add for non-customizable items (burgers, sides, drinks)
  quickAddToCart(itemId) {
    const item = HAWAS_MENU.find(i => i.id === itemId);
    if (!item) return;

    const cartItemId = `${item.id}-default`;
    const existing = this.cart.find(ci => ci.uniqueId === cartItemId);

    if (existing) {
      existing.qty += 1;
    } else {
      this.cart.push({
        uniqueId: cartItemId,
        id: item.id,
        name: item.name,
        image: item.image,
        unitPrice: item.basePrice,
        qty: 1,
        detailsText: 'طلب قياسي'
      });
    }

    this.saveCart();
    this.updateCartUI();
    this.showToast(`تمت إضافة "${item.name}" إلى سلتك بنجاح! 🛒`, 'success');
  }

  // Add Special Promo Deals
  addSpecialDeal(dealType) {
    if (dealType === 'deal-family') {
      const dealItem = {
        uniqueId: 'deal-family-' + Date.now(),
        id: 'deal-family',
        name: 'عرض الويكند العائلي (2 بيتزا كبير + بطاطس عائلي + بيبسي)',
        image: 'assets/hero_pizza.jpg',
        unitPrice: 14900,
        qty: 1,
        detailsText: '2 بيتزا عائلية كبيرة (هواس سوبريم + تشيكن رانش) + بطاطس عائلي + لتر بيبسي مجاناً'
      };
      this.cart.push(dealItem);
      this.showToast('تمت إضافة عرض العائلة الوفير إلى سلتك! 🍕🎉', 'success');
    } else if (dealType === 'deal-burger') {
      const dealItem = {
        uniqueId: 'deal-burger-' + Date.now(),
        id: 'deal-burger',
        name: 'وجبة السوبر كومبو (برجر دبل كرسبي + بطاطس + بيبسي)',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
        unitPrice: 5900,
        qty: 1,
        detailsText: 'برجر دبل كرسبي بالجبن السائل + بطاطس ويدجز متبلة + بيبسي مثلج'
      };
      this.cart.push(dealItem);
      this.showToast('تمت إضافة وجبة السوبر كومبو إلى سلتك! 🍔', 'success');
    } else if (dealType === 'deal-duo') {
      const dealItem = {
        uniqueId: 'deal-duo-' + Date.now(),
        id: 'deal-duo',
        name: 'عرض ثنائي البيتزا الوسط (2 بيتزا وسط + أصابع موزاريلا)',
        image: 'assets/hero_pizza.jpg',
        unitPrice: 11200,
        qty: 1,
        detailsText: '2 بيتزا حجم وسط + أصابع جبن موزاريلا ساخنة بنصف السعر'
      };
      this.cart.push(dealItem);
      this.showToast('تمت إضافة عرض ثنائي البيتزا إلى سلتك! 🍕🍕', 'success');
    }

    this.saveCart();
    this.updateCartUI();
    this.openCart();
  }

  // ========================================================
  // PIZZA CUSTOMIZER MODAL
  // ========================================================
  openCustomizer(itemId) {
    const item = HAWAS_MENU.find(i => i.id === itemId);
    if (!item) return;

    this.currentCustomizerItem = item;
    this.customizerQty = 1;
    this.customizerQtyEl.textContent = '1';
    this.customizerNotes.value = '';

    // Populate preview header
    this.customizerItemName.textContent = item.name;
    this.customizerItemTag.textContent = item.category === 'special-pizza' ? 'بيتزا هواس الخاصة والمميزة' : 'البيتزا الكلاسيكية الفاخرة';
    this.customizerItemImg.src = item.image;
    this.customizerItemDesc.textContent = item.desc;

    // Render sizes
    if (item.sizes && item.sizes.length > 0) {
      this.selectedSize = item.sizes[1] || item.sizes[0]; // Default medium or first
      this.sizeOptionsGrid.innerHTML = item.sizes.map(size => `
        <div class="size-card ${size.id === this.selectedSize.id ? 'active' : ''}" data-size-id="${size.id}" onclick="hawasApp.selectSize('${size.id}')">
          <span class="size-name">${size.name}</span>
          <span class="size-diameter">${size.diameter}</span>
          <span class="size-price">${size.price.toLocaleString('ar-YE')} ر.ي</span>
        </div>
      `).join('');
      document.getElementById('sizeSelectionSection').style.display = 'block';
    } else {
      this.selectedSize = { id: 'base', name: 'الحجم الافتراضي', price: item.basePrice };
      document.getElementById('sizeSelectionSection').style.display = 'none';
    }

    // Reset radio crust to default classic
    const classicRadio = document.querySelector('input[name="pizzaCrust"][value="classic"]');
    if (classicRadio) classicRadio.checked = true;

    // Reset extra checkboxes
    document.querySelectorAll('input[name="extraTopping"]').forEach(cb => cb.checked = false);

    this.updateCustomizerLivePrice();
    this.customizerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeCustomizer() {
    this.customizerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  selectSize(sizeId) {
    if (!this.currentCustomizerItem || !this.currentCustomizerItem.sizes) return;
    const size = this.currentCustomizerItem.sizes.find(s => s.id === sizeId);
    if (!size) return;

    this.selectedSize = size;
    document.querySelectorAll('.size-card').forEach(sc => {
      sc.classList.toggle('active', sc.getAttribute('data-size-id') === sizeId);
    });

    this.updateCustomizerLivePrice();
  }

  calculateCustomizerUnitTotal() {
    let unitPrice = this.selectedSize ? this.selectedSize.price : (this.currentCustomizerItem?.basePrice || 0);

    // Crust price
    const checkedCrust = document.querySelector('input[name="pizzaCrust"]:checked');
    if (checkedCrust) {
      unitPrice += parseInt(checkedCrust.getAttribute('data-price') || '0', 10);
    }

    // Extras price
    document.querySelectorAll('input[name="extraTopping"]:checked').forEach(cb => {
      unitPrice += parseInt(cb.getAttribute('data-price') || '0', 10);
    });

    return unitPrice;
  }

  updateCustomizerLivePrice() {
    const unitTotal = this.calculateCustomizerUnitTotal();
    const grand = unitTotal * this.customizerQty;
    this.customizerLiveTotal.textContent = `${grand.toLocaleString('ar-YE')} ر.ي`;
  }

  confirmCustomizerAddToCart() {
    if (!this.currentCustomizerItem) return;

    const unitPrice = this.calculateCustomizerUnitTotal();
    const checkedCrust = document.querySelector('input[name="pizzaCrust"]:checked');
    const crustName = checkedCrust?.closest('.custom-radio')?.querySelector('strong')?.textContent?.trim() || 'كلاسيكية';

    const selectedExtras = [];
    document.querySelectorAll('input[name="extraTopping"]:checked').forEach(cb => {
      selectedExtras.push(cb.getAttribute('data-name'));
    });

    const notes = this.customizerNotes.value.trim();

    // Unique signature so identical customizations stack, different ones stay separate
    const extrasKey = selectedExtras.sort().join('|');
    const crustVal = checkedCrust?.value || 'classic';
    const sizeId = this.selectedSize?.id || 'std';
    const uniqueId = `${this.currentCustomizerItem.id}-${sizeId}-${crustVal}-${extrasKey}-${notes ? 'note' : 'clean'}`;

    const detailsParts = [this.selectedSize.name, crustName];
    if (selectedExtras.length > 0) {
      detailsParts.push(`إضافات: ${selectedExtras.join('، ')}`);
    }
    if (notes) {
      detailsParts.push(`ملاحظة: ${notes}`);
    }

    const existing = this.cart.find(ci => ci.uniqueId === uniqueId);
    if (existing) {
      existing.qty += this.customizerQty;
    } else {
      this.cart.push({
        uniqueId: uniqueId,
        id: this.currentCustomizerItem.id,
        name: this.currentCustomizerItem.name,
        image: this.currentCustomizerItem.image,
        unitPrice: unitPrice,
        qty: this.customizerQty,
        detailsText: detailsParts.join(' | ')
      });
    }

    this.saveCart();
    this.updateCartUI();
    this.closeCustomizer();
    this.showToast(`تمت إضافة "${this.currentCustomizerItem.name}" إلى سلتك! 🍕`, 'success');
  }

  // ========================================================
  // CART DRAWER & OPERATIONS
  // ========================================================
  openCart() {
    this.cartBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    this.updateCartUI();
  }

  closeCart() {
    this.cartBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  updateCartUI() {
    const totalItems = this.cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = this.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);

    // Update Header badges
    this.cartCount.textContent = totalItems;
    this.cartTotalPreview.textContent = `${subtotal.toLocaleString('ar-YE')} ر.ي`;
    this.cartItemsCountText.textContent = totalItems;

    // Check empty state
    if (this.cart.length === 0) {
      this.cartItemsList.innerHTML = '';
      this.emptyCartState.style.display = 'block';
      this.cartDrawerFooter.style.display = 'none';
      return;
    }

    this.emptyCartState.style.display = 'none';
    this.cartDrawerFooter.style.display = 'block';

    // Render list
    this.cartItemsList.innerHTML = this.cart.map(item => `
      <div class="cart-item-card" data-unique-id="${item.uniqueId}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&auto=format&fit=crop&q=80'">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.name}</h4>
          <p class="cart-item-meta">${item.detailsText || ''}</p>
          <div class="cart-item-row">
            <span class="cart-item-price">${(item.unitPrice * item.qty).toLocaleString('ar-YE')} ر.ي</span>
            <div class="cart-item-stepper">
              <button type="button" onclick="hawasApp.changeCartQty('${item.uniqueId}', -1)" aria-label="تقليل">-</button>
              <span>${item.qty}</span>
              <button type="button" onclick="hawasApp.changeCartQty('${item.uniqueId}', 1)" aria-label="زيادة">+</button>
            </div>
          </div>
        </div>
        <button type="button" class="cart-item-delete" onclick="hawasApp.removeCartItem('${item.uniqueId}')" title="حذف الصنف">&times;</button>
      </div>
    `).join('');

    this.cartSubtotal.textContent = `${subtotal.toLocaleString('ar-YE')} ر.ي`;
    this.cartGrandTotal.textContent = `${subtotal.toLocaleString('ar-YE')} ر.ي`;
  }

  changeCartQty(uniqueId, delta) {
    const item = this.cart.find(ci => ci.uniqueId === uniqueId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      this.cart = this.cart.filter(ci => ci.uniqueId !== uniqueId);
    }

    this.saveCart();
    this.updateCartUI();
  }

  removeCartItem(uniqueId) {
    this.cart = this.cart.filter(ci => ci.uniqueId !== uniqueId);
    this.saveCart();
    this.updateCartUI();
    this.showToast('تم حذف الصنف من السلة', 'info');
  }

  // ========================================================
  // CHECKOUT MODAL & ORDER PROCESSING
  // ========================================================
  openCheckout() {
    if (this.cart.length === 0) {
      this.showToast('السلة فارغة! اختر وجبتك أولاً من المنيو 🍕', 'info');
      return;
    }

    this.updateCheckoutBill();
    this.checkoutBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeCheckout() {
    this.checkoutBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  updateCheckoutBill() {
    const subtotal = this.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
    const orderType = document.querySelector('input[name="orderType"]:checked')?.value || 'delivery';

    let deliveryFee = 0;
    if (orderType === 'delivery') {
      const selectedOption = this.custDistrict.options[this.custDistrict.selectedIndex];
      if (selectedOption && selectedOption.dataset.fee) {
        deliveryFee = parseInt(selectedOption.dataset.fee, 10);
      } else {
        deliveryFee = 1000; // default average delivery
      }
    }

    const grand = subtotal + deliveryFee;

    this.finalSubtotal.textContent = `${subtotal.toLocaleString('ar-YE')} ر.ي`;
    this.finalDelivery.textContent = orderType === 'delivery' 
      ? `${deliveryFee.toLocaleString('ar-YE')} ر.ي`
      : 'مجاناً (استلام من الفرع)';
    this.finalGrandTotal.textContent = `${grand.toLocaleString('ar-YE')} ر.ي`;
  }

  handleProcessOrder() {
    const orderType = document.querySelector('input[name="orderType"]:checked')?.value || 'delivery';
    const name = this.custName.value.trim();
    const phone = this.custPhone.value.trim();
    const payMethod = document.querySelector('input[name="payMethod"]:checked')?.value || 'cash';
    const subtotal = this.cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);

    let districtKey = '';
    let districtName = '';
    let address = '';
    let deliveryFee = 0;

    if (orderType === 'delivery') {
      districtKey = this.custDistrict.value;
      if (!districtKey) {
        this.showToast('يرجى اختيار حي أو منطقة التوصيل في المكلا!', 'error');
        this.custDistrict.focus();
        return;
      }
      districtName = DISTRICT_NAMES[districtKey] || 'المكلا';
      address = this.custAddress.value.trim();
      if (!address) {
        this.showToast('يرجى إدخال تفاصيل العنوان وأقرب معلم بالمكلا!', 'error');
        this.custAddress.focus();
        return;
      }
      const selectedOption = this.custDistrict.options[this.custDistrict.selectedIndex];
      deliveryFee = parseInt(selectedOption.dataset.fee || '1000', 10);
    } else {
      districtName = 'استلام من فرع المكلا (الشارع العام)';
      address = 'استلام محلي';
      deliveryFee = 0;
    }

    const grandTotal = subtotal + deliveryFee;
    const orderCode = '#HW-' + Math.floor(1000 + Math.random() * 9000);
    const orderDate = new Date().toLocaleString('ar-YE', { dateStyle: 'medium', timeStyle: 'short' });

    const payLabels = {
      cash: 'نقداً عند الاستلام (كاش)',
      kuraimi: 'حساب بنك الكريمي (3008921455)',
      qutaibi: 'بنك القطيبي الإسلامي (1229048110)'
    };

    const newOrder = {
      code: orderCode,
      date: orderDate,
      timestamp: Date.now(),
      step: 1, // 1: Received, 2: In Oven, 3: On The Way, 4: Delivered
      etaMinutes: orderType === 'delivery' ? 35 : 20,
      customer: {
        name,
        phone,
        orderType,
        district: districtName,
        address
      },
      payment: {
        method: payMethod,
        methodLabel: payLabels[payMethod] || 'كاش'
      },
      items: [...this.cart],
      subtotal,
      deliveryFee,
      grandTotal
    };

    // Save Active Order and History
    this.saveActiveOrder(newOrder);
    this.orderHistory.unshift(newOrder);
    this.saveOrderHistory(this.orderHistory);

    // Empty Cart
    this.cart = [];
    this.saveCart();
    this.updateCartUI();

    // Close checkout modal
    this.closeCheckout();

    // Send to WhatsApp if enabled
    if (this.checkSendWhatsapp.checked) {
      this.generateWhatsAppRedirect(newOrder);
    }

    // Open live tracker immediately
    this.showToast(`تم تأكيد طلبك بنجاح برقم ${orderCode}! نخبزه لك الآن 🔥`, 'success');
    this.openTracker();
  }

  generateWhatsAppRedirect(order) {
    const phoneRestaurant = '967770000000'; // Official Mukalla Hawas Pizza WhatsApp
    let msg = `*🍕 طلب جديد من موقع بيتزا هواس المكلا 🍕*\n`;
    msg += `------------------------------------\n`;
    msg += `*رقم الطلب:* ${order.code}\n`;
    msg += `*الاسم الكريم:* ${order.customer.name}\n`;
    msg += `*رقم الجوال:* ${order.customer.phone}\n`;
    msg += `*نوع الاستلام:* ${order.customer.orderType === 'delivery' ? '🛵 توصيل لمنازل/مكاتب المكلا' : '🏪 استلام من الفرع'}\n`;
    if (order.customer.orderType === 'delivery') {
      msg += `*الحي/المنطقة:* ${order.customer.district}\n`;
      msg += `*العنوان والمعلم:* ${order.customer.address}\n`;
    }
    msg += `*طريقة الدفع:* ${order.payment.methodLabel}\n`;
    msg += `------------------------------------\n`;
    msg += `*📋 قائمة الأصناف:* \n`;
    order.items.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.name} (عدد: ${item.qty}) - ${(item.unitPrice * item.qty).toLocaleString('ar-YE')} ر.ي\n`;
      if (item.detailsText) {
        msg += `   ↳ ${item.detailsText}\n`;
      }
    });
    msg += `------------------------------------\n`;
    msg += `*قيمة الأصناف:* ${order.subtotal.toLocaleString('ar-YE')} ر.ي\n`;
    msg += `*أجرة التوصيل:* ${order.deliveryFee.toLocaleString('ar-YE')} ر.ي\n`;
    msg += `*المجموع الإجمالي المطلوب:* ${order.grandTotal.toLocaleString('ar-YE')} ر.ي\n`;
    msg += `------------------------------------\n`;
    msg += `شكراً لكم، بانتظار تأكيد وتجهيز الطلب ساخناً! 🔥`;

    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${phoneRestaurant}?text=${encoded}`;
    window.open(waUrl, '_blank');
  }

  // ========================================================
  // LIVE ORDER TRACKER ENGINE
  // ========================================================
  checkActiveOrderTracker() {
    if (this.activeOrder && this.activeOrder.step < 4) {
      this.trackerPulse.style.display = 'block';
    } else {
      this.trackerPulse.style.display = 'none';
    }
  }

  openTracker() {
    if (!this.activeOrder) {
      // If no active order, check if we have any past orders in history
      if (this.orderHistory.length > 0) {
        this.activeOrder = this.orderHistory[0];
      } else {
        this.showToast('لا يوجد طلب نشط حالياً، ابدأ باختيار وجبتك من المنيو!', 'info');
        location.href = '#menu-section';
        return;
      }
    }

    this.renderTrackerUI();
    this.trackerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeTracker() {
    this.trackerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  renderTrackerUI() {
    if (!this.activeOrder) return;
    const ord = this.activeOrder;

    this.trackerOrderCode.textContent = ord.code;

    // Delivery vs Pickup terminology
    if (ord.customer.orderType === 'pickup') {
      this.step3Title.textContent = 'جاهز للاستلام';
      this.step3Sub.textContent = 'في صالة المطعم';
    } else {
      this.step3Title.textContent = 'في الطريق إليك';
      this.step3Sub.textContent = 'مع كابتن التوصيل 🛵';
    }

    // Step state highlight
    const steps = [
      document.getElementById('stepNode1'),
      document.getElementById('stepNode2'),
      document.getElementById('stepNode3'),
      document.getElementById('stepNode4')
    ];

    steps.forEach((node, index) => {
      const stepIndex = index + 1;
      node.classList.remove('active', 'completed');
      if (stepIndex < ord.step) {
        node.classList.add('completed');
      } else if (stepIndex === ord.step) {
        node.classList.add('active');
      }
    });

    // ETA calculation
    if (ord.step === 1) {
      this.trackerEtaTimer.textContent = `${ord.etaMinutes} دقيقة`;
      this.trackerCurrentIcon.textContent = '📋';
      this.trackerCurrentTitle.textContent = 'تم استلام طلبك ومراجعته بنجاح';
      this.trackerCurrentDetail.textContent = 'تم إرسال تفاصيل طلبك مباشرة إلى شيف بيتزا هواس لبدء تجهيز المكونات الطازجة.';
    } else if (ord.step === 2) {
      this.trackerEtaTimer.textContent = 'حوالي 18 دقيقة';
      this.trackerCurrentIcon.textContent = '🔥';
      this.trackerCurrentTitle.textContent = 'الطلب في الفرن الحجري الساخن';
      this.trackerCurrentDetail.textContent = 'يتم الآن فرد العجين ووضع صلصة الطماطم الغنية والجبن الموزاريلا والخبز على درجات حرارة عالية.';
    } else if (ord.step === 3) {
      if (ord.customer.orderType === 'pickup') {
        this.trackerEtaTimer.textContent = 'جاهز الآن!';
        this.trackerCurrentIcon.textContent = '🥡';
        this.trackerCurrentTitle.textContent = 'طلبك ساخن وجاهز للاستلام من الفرع';
        this.trackerCurrentDetail.textContent = 'تفضل بزيارة كاونتر الاستلام في فرع المكلا الشارع العام لاستلام وجبتك الشهية.';
      } else {
        this.trackerEtaTimer.textContent = 'حوالي 8 دقائق';
        this.trackerCurrentIcon.textContent = '🛵';
        this.trackerCurrentTitle.textContent = 'الكابتن في الطريق إلى موقعك';
        this.trackerCurrentDetail.textContent = `انطلق مندوب التوصيل بالحقيبة الحرارية متجهاً إلى ${ord.customer.district} (${ord.customer.address}).`;
      }
    } else if (ord.step === 4) {
      this.trackerEtaTimer.textContent = 'تم التسليم ✅';
      this.trackerCurrentIcon.textContent = '🎉';
      this.trackerCurrentTitle.textContent = 'تم تسليم الطلب بالهناء والعافية!';
      this.trackerCurrentDetail.textContent = 'نتمنى لك وجبة شهية وتجربة استثنائية مع بيتزا هواس. نتطلع لخدمتك دائماً في المكلا!';
    }

    // Render items list inside tracker
    this.trackerItemsList.innerHTML = ord.items.map(item => `
      <div class="tracker-item-row">
        <span>${item.name} (عدد: ${item.qty})</span>
        <strong>${(item.unitPrice * item.qty).toLocaleString('ar-YE')} ر.ي</strong>
      </div>
    `).join('');

    this.trackerAddressText.textContent = ord.customer.orderType === 'delivery' 
      ? `${ord.customer.district} - ${ord.customer.address}` 
      : 'استلام من الفرع';
    this.trackerTotalText.textContent = `${ord.grandTotal.toLocaleString('ar-YE')} ر.ي`;
    this.trackerPaymentText.textContent = ord.payment.methodLabel;
  }

  simulateNextOrderStep() {
    if (!this.activeOrder) return;
    if (this.activeOrder.step < 4) {
      this.activeOrder.step += 1;
      this.saveActiveOrder(this.activeOrder);
      this.renderTrackerUI();
      this.showToast(`تم تحديث حالة الطلب إلى المرحلة ${this.activeOrder.step} 🔄`, 'info');
    } else {
      this.showToast('تم اكتمال وتسليم هذا الطلب بالفعل! 🎉', 'success');
    }
  }

  resetOrderSimulation() {
    if (!this.activeOrder) return;
    this.activeOrder.step = 1;
    this.saveActiveOrder(this.activeOrder);
    this.renderTrackerUI();
    this.showToast('تمت إعادة ضبط محاكي التتبع إلى البداية ⏱️', 'info');
  }

  // ========================================================
  // ORDER HISTORY MODAL
  // ========================================================
  openOrderHistoryModal() {
    if (this.orderHistory.length === 0) {
      this.showToast('لا توجد طلبات سابقة مسجلة على هذا الجهاز حتى الآن.', 'info');
      return;
    }

    this.historyModalBody.innerHTML = this.orderHistory.map(ord => `
      <div class="history-card">
        <div class="history-header">
          <span class="history-code">${ord.code}</span>
          <span class="history-date">${ord.date}</span>
        </div>
        <div class="history-items">
          ${ord.items.map(i => `${i.name} (×${i.qty})`).join(' ، ')}
        </div>
        <div class="history-footer">
          <span>الإجمالي: <strong style="color:var(--accent-gold);">${ord.grandTotal.toLocaleString('ar-YE')} ر.ي</strong></span>
          <button type="button" class="btn btn-sm btn-outline" onclick="hawasApp.viewPastOrder('${ord.code}')">
            تتبع ومعاينة 🔍
          </button>
        </div>
      </div>
    `).join('');

    this.historyBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeHistoryModal() {
    this.historyBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  viewPastOrder(orderCode) {
    const ord = this.orderHistory.find(o => o.code === orderCode);
    if (!ord) return;
    this.activeOrder = ord;
    this.closeHistoryModal();
    this.openTracker();
  }

  // ========================================================
  // TOAST FEEDBACK NOTIFICATIONS
  // ========================================================
  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
    
    let icon = '🔔';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '⚠️';

    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastFadeOut 0.3s forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }
}

// Global Application Initialization
let hawasApp;
document.addEventListener('DOMContentLoaded', () => {
  hawasApp = new HawasApp();
});
