const bucketList = document.querySelector('#bucket-list');
const infoBtn = document.querySelector('.destination-info');
const modal = document.querySelector('#infoModal');
const closeBtn = document.querySelector('#closeBtn');
const infoContent = document.querySelector('.destination-info-content');
const deleteBtn = document.querySelector('.delete-destination');
const visitedBtn = document.querySelector('.visited-destination');
const notesBtn = document.querySelector('.destination-notes');
const notesContent = document.querySelector('.destination-notes-content');
const notesModal = document.querySelector('#notesModal');

//**more pseudo than code, but the idea is to have the notes button
//open the journal entry with a matching destination or a brand new note entry
//alter at will
notesBtn.addEventListener('click', () => {
  if (notes.destination_id === carouselCard.destination_id) {
            location.href='#travel-journal.destination_id';
  } else if (notes.destination_id !== carouselCard.destination_id) {
    location.href='#travel-journal.new_note';
  }
});


infoBtn.addEventListener('click', () => {
  if ()
});

// //not working well with the smart-carousel element
// infoBtn.addEventListener('click', () => {
//   modal.style.display = 'block';
// });

// // closeBtn and window.addEventListener are associated to the non-functioning modal
// closeBtn.addEventListener('click', () => {
//   modal.style.display = 'none';
// });

// window.addEventListener('click', (event) => {
//   if (event.target === modal) {
//       modal.style.display = 'none';
//   }
// });

//connect button to entire great-grandparent element
//to remove entire card from carousel and out of bucket-list table
//do we need a separate table for bucket-list?**

deleteBtn.addEventListener("click", () => {
  getElementByClassName("bl-card-item").remove();
});

// removeCard = () => {
//  getElementsByClassName("bl-card-item").remove(); 
// }



const destinations = async () => {
    const result = await fetch('https://traveling-bucket-a1886f9c05bf.herokuapp.com/api/travelDestinations/destinations', 
    {
        method: 'GET',
    });
    const json = await result.json()
    return json;
  }

console.log(destinations());

const createCard = (name, country, image, description, notes, visited) => {

  const name = destinations[i].name;
  const country = destinations[i].country;
  const image = destinations[i].image;
  const description = destinations[i].description;
  const notes = destinations[i].notes;
  const visited = destinations[i].visited

  console.log(name, country, image, description, notes, visited);

  const carouselCard = `
  <li class="bl-card-item">
    <section class="bl-card-body">
      <div class = "bl-card-main">
      <div>
        <div class="bl-card-header">
          <h3 class="bl-item-label">${name},${country} </h3>
        </div>
        <div class="bl-card-image">
          <img class="bl-location-image" src="${image}" 
          alt="location image from Unsplash or creative commons sources" />
        </div>
      </div>
      </div>
      <div class="bl-buttons-footer">
        <smart-button class="destination-info btn">
          <i class="icon fa-solid fa-circle-info"><a href="#tabs"></a></i>
        </smart-button>
        <div id="infoModal" class="modal">
          <div class="modal-content">
            <span class="close" id="closeBtn">&times;</span>
            <h2>About ${name}</h2>
            <div class="destination-info-content">
                <p>${description}</p>
            </div>
          </div>
        </div>
        <smart-button class="destination-notes btn">
          <i class="icon fa-solid fa-list"><a href="#journal"></a></i>
        </smart-button>
        <div id="notesModal" class="modal">
        <div class="modal-content">
          <span class="close" id="closeBtn">&times;</span>
          <h2>Insert Title Here</h2>
          <div class="destination-info-content">
              <p>${notes}</p>
          </div>
        </div>
      </div>
        <smart-button class="visited-destination btn">
          <i class="icon fa-solid fa-check"></i>
        </smart-button>
        <smart-button class="delete-destination btn" onclick="removeCard()">
          <i class="icon fa fa-trash"></i>
        </smart-button>
      </div>
    </section>
  </li>
`

        console.log(travelDestinationData);

        bucketList.insertAdjacentHTML('beforeend', carouselCard);
  };





