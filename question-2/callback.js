const delayedSuccess = () => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        console.log(success)
    }, 500)
}

const delayedException = () => {
    setTimeout(() => {
        try{
            throw new Error('error: delayed exception!');
        } catch(e) {
            console.error(e);
        }
    }, 500)
}

delayedSuccess()
delayedException()


const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let success = {'message': 'resolved promise success!'}
            resolve(success);
        }, 500);
    });
}

resolvedPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = {'error': 'rejected promise exception!'}
            reject(error);
        }, 500);
    });
}

rejectedPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
