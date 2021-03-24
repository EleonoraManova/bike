const CreateTrip = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.category.value);
    }

    return (
        <div>
            <h1>CreateTrip</h1>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="category">Category</label>
                <input type="text" id="category" name="category" />
                <label htmlFor="image">Image</label>
                <input type="url" id="image" name="image" />
                <textarea name="description" />
                <input type="submit" value="CreateTrip" />

            </form>
        </div>
    )

}


export default CreateTrip;