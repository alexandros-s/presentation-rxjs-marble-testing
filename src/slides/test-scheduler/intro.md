# The TestScheduler

* It is virtual scheduler (Controls Time).
* Provides helpers.
* Provides an assertion wrapper.

<small>
We use the TestScheduler as a substitute, or test double, for the production IScheduler types. Using this virtual scheduler, we can either execute all queued actions, or only those up to a specified point in time.  
</small>