

function GotoTop() {
  return (
    <div className="text-offWhite fixed top-[80%] right-0 mr-8 bg-gold-light hover:bg-gold-dark p-2 rounded-full shadow-md">
      <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8 stroke-offWhite"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
          />
        </svg>
      </a>
    </div>

  );
}

export default GotoTop