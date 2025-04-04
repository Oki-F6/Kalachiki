//Массив images содержит пути к изображениям.
const images = [
    "./src/images/kalachik.jpg",
    "./src/images/kalachik-1.jpg",
    "./src/images/kalachik-2.jpg",
  ];
  //Переменная currentIndex хранит индекс текущего изображения.
  let currentIndex = 0;
  
  //Функция showSlide(index) обновляет изображение в слайдере.
  function showSlide(index) {
    const slide = document.getElementById("slide");
    slide.src = images[index];
  }
  
  //Функции nextSlide() и prevSlide() переключают изображения вперёд и назад соответственно, , используя новый currentIndex.
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length; //Оператор % (остаток от деления) используется для обеспечения циклического перехода. 
    //Когда currentIndex достигает конца массива, он сбрасывается на 0, чтобы начать с первого изображения снова.
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }
  //Использование оператора % гарантирует, что слайдер будет переключаться по кругу, даже если достигнут конец массива.
  