import Card from './Card';

export default function CardList({ data: listData }) {
    return (
        <>
            <div className="card-grid">
                {listData.map((list) => (
                    <Card item={list} key={list.id} />
                ))}
            </div>
        </>
    );
}
