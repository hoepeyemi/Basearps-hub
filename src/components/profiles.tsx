import React from 'react';



export default function Profiles({ Leaderboard }) {
    return (
      <div id="profile">
        {Item(Leaderboard)}
      </div>
    );
  }
  
  function Item(data) {
    return (
      <>
        {data.map((value, index) => (
          <div className="flex" key={index}>
            <p
              style={{
                height: 'fit-content',
                margin: 'auto',
                fontWeight: '600',
                fontSize: '20px',
              }}
            >
              {getEmojiForPosition(index)}
            </p>
            <div className="item">
              <div className="info">
                <h3 className='name text-dark'>{value.wallet.slice(0, 5)}...{value.wallet.slice(37, 42)}</h3>    
                <span></span>
              </div>                
            </div>
            <div className="item">
              <span>{value.wins} wins</span>
            </div>
          </div>
        ))}
      </>
    );
  }
  
  function getEmojiForPosition(index) {
    switch (index) {
      case 0:
        return '🥇'; // First place
      case 1:
        return '🥈'; // Second place
      case 2:
        return '🥉'; // Third place
      default:
        return index + 1; // Other places
    }
  }
  