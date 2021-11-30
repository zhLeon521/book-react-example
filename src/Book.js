/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-30 23:02:45
 * @LastEditTime: 2021-11-30 23:25:58
 * @FilePath: \my-app\src\Book.js
 */
export const Book = (props) => {
    // console.log(props)
    const { img, title, author } = props.boook
    const clickHandle = (e) => {
        console.log(e)
        console.log(e.target)
        alert('hello world')
    }

    // const complexExample = (author) => {
    //   console.log(author)
    // }

    return (
        <article
            className='book'
            onMouseOver={() => {
                console.log(title)
            }}
        >
            <img src={img} alt='' />
            <h1>{title}</h1>
            <h4>{author}</h4>
            {/* <button type="button" onClick={complexExample(author)}>example</button> */}
            <button type="button" onClick={clickHandle}>example</button>
        </article >
    )

}
