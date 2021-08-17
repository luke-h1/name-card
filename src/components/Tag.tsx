import React from 'react';

interface TagProps {
  greeting?: string;
  name: string;
}

const Tag: React.FC<TagProps> = ({ greeting = 'Hi', name }) => {
  return (
    <main>
      <header>
        <h1>{greeting}</h1>
        <p>My Name Is</p>
      </header>
      <section className="name">
        <p>{name}</p>
      </section>
    </main>
  );
};
export default Tag;
