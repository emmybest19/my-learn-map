import Card from "../components/Card.jsx";
import CardContent from "../components/CardContent.jsx";
function Category() {
  return (
    <div className="px-6 md:px-10 py-16 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#3B82F6]">
        Popular Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          "Web Development",
          "Data Science",
          "Business",
          "Design",
          "Marketing",
          "Personal Development",
        ].map((category, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center font-semibold text-gray-700">
              {category}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Category;
