export default function CityListsPage() {
  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Lists of Cities
            </h2>

            <p className="text-muted-foreground">
              Here is a lists of cities created by users.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
