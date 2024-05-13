const React = require('react')
const Default = require('./default')

function NewReviewForm({ olid }) {



    return (
    <Default>
        <form >
            <div>
                <div>
                    <label htmlFor="review">Review</label>
                    <textarea
                        required
                        id="review"
                        name="review"
                    />
                </div>
            </div>
            <div>
                <div className='hidden'>
                    <input  value={authorId} className='hidden'/>
                    <input  value={olid} className='hidden'/>
                </div>
                <div>
                    <label htmlFor="stars">Star Rating</label>
                    <input
                        type="range"
                        step="0.5"
                        min="1"
                        max="5"
                        id="stars"
                        name="stars"
                        className="form-control"
                    />
                </div>
            </div>
            <input className="btn btn-primary" type="submit" value="Add Comment" />
        </form>
    </Default>    
    )
}

export default NewReviewForm