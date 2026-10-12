import {type Filter, FILTER} from "../../shared/types/Task.ts";

interface buttonProps{
    buttonFiltering(filter: Filter): void
}

export function FilterButton({buttonFiltering}: buttonProps){

    return(
        <div className="filter-button flex">
            <form action="">
                {FILTER.map(
                    button =>
                        (<button
                            key={button}
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