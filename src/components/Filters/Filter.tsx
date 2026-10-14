import {type Filter, FILTER} from "../../shared/types/Task.ts";

interface buttonProps{
    buttonFiltering(filter: Filter): void
    filter: string;
}

export function FilterButton({buttonFiltering, filter}: buttonProps){

    return(
        <div className="filter-button flex">
            <form action="">
                {FILTER.map(
                    button =>
                        (<button
                            key={button}
                            className={filter === button ? 'active': ''}
                            onClick={(e)=>{
                                e.preventDefault()
                                buttonFiltering(button);
                            }}
                        >{button}
                        </button>)
                )}
            </form>
        </div>
    )
}