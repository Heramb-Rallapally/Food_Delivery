import React from 'react';

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="https://media.istockphoto.com/id/1392737321/vector/italian-pizza-horizontal-design-template-pizza-margherita-with-tomatoes-and-mozzarella.jpg?s=612x612&w=0&k=20&c=EZdGCEP0-lPpZGQtAOGxGcHDPipsf0FeqaRWIcj3p_c=" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://media.istockphoto.com/id/1392737321/vector/italian-pizza-horizontal-design-template-pizza-margherita-with-tomatoes-and-mozzarella.jpg?s=612x612&w=0&k=20&c=EZdGCEP0-lPpZGQtAOGxGcHDPipsf0FeqaRWIcj3p_c=" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}
