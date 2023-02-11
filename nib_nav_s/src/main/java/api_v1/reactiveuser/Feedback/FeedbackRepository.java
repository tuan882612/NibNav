package api_v1.reactiveuser.Feedback;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepository extends ReactiveMongoRepository<Feedback, String> {
}
