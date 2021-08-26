import React from "react";

export const useSortedMessages = (messages, sort) => {

    return React.useMemo(() => {

        if (sort)
            return [...messages].sort((a, b) => a[sort].localeCompare(b[sort]));
        else
            return messages;

    }, [sort, messages]);

}

export const useMessages = (messages, sort, search) => {

    const sortedMessages = useSortedMessages(messages, sort);

    return React.useMemo(() => {

        return sortedMessages.filter(message => message.title.toLowerCase().includes(search.toLowerCase()));

    }, [search, sortedMessages]);

}