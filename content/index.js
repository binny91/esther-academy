/* רשימת המסלולים באקדמיה.
   כדי להוסיף מסלול חדש: יוצרים קובץ content/<id>.js שקורא ל-ACADEMY.addTrack({...})
   ומוסיפים כאן את ה-id. שיעורים חדשים שנוספים לסוף מסלול קיים נפתחים אוטומטית לפי ההתקדמות. */
window.ACADEMY_TRACKS = ['bursa', 'trading', 'economics', 'stocks', 'business', 'geopolitics', 'french'];
window.ACADEMY_EXTRA = ['french-audio'];
window.ACADEMY_SOON = [
  { title: 'נדל״ן', emoji: '🏠', subtitle: 'משכנתאות, תשואה משכירות, מיסוי דירות' },
  { title: 'מיסים ופנסיה', emoji: '🧾', subtitle: 'קרן פנסיה, קרן השתלמות, תיאום מס' },
  { title: 'קריפטו', emoji: '🪙', subtitle: 'בלוקצ׳יין, ביטקוין, סיכונים ורגולציה' },
  { title: 'פיננסים אישיים', emoji: '💰', subtitle: 'תקציב משפחתי, חיסכון, ריבית דריבית' },
  { title: 'יזמות וסטארטאפים', emoji: '🚀', subtitle: 'גיוס הון, סבבים, הייטק ישראלי' }
];
